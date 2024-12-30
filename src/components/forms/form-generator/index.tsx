import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ErrorMessage } from '@hookform/error-message';
import React from 'react';
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';
import { Textarea } from '@/components/ui/textarea';

type Props = {
  type: 'text' | 'email' | 'password';
  inputType: 'select' | 'input' | 'textarea';
  options?: { value: string; label: string; id: string }[];
  label?: string;
  placeholder: string;
  register: UseFormRegister<any>;
  name: string;
  errors: FieldErrors<FieldValues>;
  lines?: number;
  form?: string;
  defaultValue?: string;
};

const FormGenerator = ({
  errors,
  inputType,
  name,
  placeholder,
  defaultValue,
  register,
  type,
  form,
  label,
  lines,
  options,
}: Props) => {
  const fieldId = `field-${name}`;

  switch (inputType) {
    case 'input':
      return (
        <Label className="flex flex-col gap-2" htmlFor={fieldId}>
          {label && <span>{label}</span>}
          <Input
            id={fieldId}
            type={type}
            placeholder={placeholder}
            form={form}
            defaultValue={defaultValue}
            {...register(name)}
          />
          <ErrorMessage
            errors={errors}
            name={name}
            render={({ message }) => (
              <p className="text-red-400">{message}</p>
            )}
          />
        </Label>
      );
    case 'select':
      return (
        <Label className="flex flex-col gap-2" htmlFor={fieldId}>
          {label && <span>{label}</span>}
          <select
            id={fieldId}
            form={form}
            {...register(name)}
            className="border rounded px-2 py-1"
          >
            {options?.map((option) => (
              <option value={option.value} key={option.id}>
                {option.label}
              </option>
            ))}
          </select>
          <ErrorMessage
            errors={errors}
            name={name}
            render={({ message }) => (
              <p className="text-red-400">{message}</p>
            )}
          />
        </Label>
      );
    case 'textarea':
      return (
        <Label className="flex flex-col gap-2" htmlFor={fieldId}>
          {label && <span>{label}</span>}
          <Textarea
            id={fieldId}
            placeholder={placeholder}
            {...register(name)}
            rows={lines}
            defaultValue={defaultValue}
          />
          <ErrorMessage
            errors={errors}
            name={name}
            render={({ message }) => (
              <p className="text-red-400">{message}</p>
            )}
          />
        </Label>
      );
    default:
      return null;
  }
};

export default FormGenerator;
