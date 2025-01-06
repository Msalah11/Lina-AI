import { PrismaClient, Plans, Role } from '@prisma/client'
import { faker } from '@faker-js/faker'

const prisma = new PrismaClient()

async function main() {
  // Create a test user
  const user = await prisma.user.create({
    data: {
      fullname: faker.person.fullName(),
      clerkId: faker.string.uuid(),
      type: 'admin',
      stripeId: faker.string.uuid(),
      subscription: {
        create: {
          plan: Plans.PRO,
          credits: 100,
        },
      },
    },
  })

  // Create multiple domains for the user
  const domains = await Promise.all(
    Array(3)
      .fill(null)
      .map(async () => {
        const domain = await prisma.domain.create({
          data: {
            name: faker.internet.domainName(),
            icon: faker.string.uuid(), // Simulating uploaded icon ID
            userId: user.id,
            chatBot: {
              create: {
                welcomeMessage: faker.lorem.sentence(),
                icon: faker.string.uuid(),
                background: faker.color.rgb(),
                textColor: faker.color.rgb(),
                helpdesk: faker.datatype.boolean(),
              },
            },
          },
        })

        // Create help desk items for each domain
        await Promise.all(
          Array(5)
            .fill(null)
            .map(() =>
              prisma.helpDesk.create({
                data: {
                  question: faker.lorem.sentence(),
                  answer: faker.lorem.paragraph(),
                  domainId: domain.id,
                },
              })
            )
        )

        // Create filter questions for each domain
        await Promise.all(
          Array(3)
            .fill(null)
            .map(() =>
              prisma.filterQuestions.create({
                data: {
                  question: faker.lorem.paragraph(),
                  answered: faker.lorem.sentence(),
                  domainId: domain.id,
                },
              })
            )
        )

        // Create products for each domain
        await Promise.all(
          Array(4)
            .fill(null)
            .map(() =>
              prisma.product.create({
                data: {
                  name: faker.commerce.productName(),
                  price: parseInt(faker.commerce.price()),
                  image: faker.string.uuid(), // Simulating uploaded image ID
                  domainId: domain.id,
                },
              })
            )
        )

        // Create customers for each domain
        await Promise.all(
          Array(3)
            .fill(null)
            .map(async () => {
              const customer = await prisma.customer.create({
                data: {
                  email: faker.internet.email(),
                  domainId: domain.id,
                },
              })

              // Create chat rooms for each customer
              const chatRoom = await prisma.chatRoom.create({
                data: {
                  live: faker.datatype.boolean(),
                  mailed: faker.datatype.boolean(),
                  customerId: customer.id,
                },
              })

              // Create chat messages for each chat room
              await Promise.all(
                Array(5)
                  .fill(null)
                  .map(() =>
                    prisma.chatMessage.create({
                      data: {
                        message: faker.lorem.sentence(),
                        role: faker.helpers.arrayElement([Role.user, Role.assistant]),
                        chatRoomId: chatRoom.id,
                        seen: faker.datatype.boolean(),
                      },
                    })
                  )
              )

              // Create customer responses
              await Promise.all(
                Array(2)
                  .fill(null)
                  .map(() =>
                    prisma.customerResponses.create({
                      data: {
                        question: faker.lorem.sentence(),
                        answered: faker.lorem.sentence(),
                        customerId: customer.id,
                      },
                    })
                  )
              )
            })
        )

        return domain
      })
  )

  console.log('Database has been seeded. 🌱')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
