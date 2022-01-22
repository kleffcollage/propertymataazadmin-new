import {
  FormControl,
  FormErrorMessage,
  FormLabel,
} from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import React from "react";
import { FieldValues, UseFormRegister, FieldError } from "react-hook-form";

interface FormInputProps {
  name: string;
  placeholder?: string;
  label?: string;
  register: UseFormRegister<any>;
  error: FieldError | undefined;
  type?: string;
  required?: boolean;
  disableLabel?: boolean;
  validate?: any;
  icon?: boolean;
  variant?: string;
  borderColor?: string;
  borderRadius?: string;
  borderWidth?: string;
  placeholderColor?: string;
}

export default function PrimaryInput({
  name,
  required = false,
  type = "text",
  label = "",
  register,
  validate = {},
  error,
  disableLabel = false,
  placeholder = "",
  variant = "outline",
  borderColor = "gray.300",
  borderRadius = "md",
  placeholderColor = "gray.300",
}: FormInputProps) {
  return (
    <div>
      <FormControl isInvalid={error ? true : false}>
        {!disableLabel ?<FormLabel htmlFor="name">{label}</FormLabel> : null}
        <Input
          {...register(`${name}`, { required, ...validate })}
          type={type}
          placeholder={placeholder}
          variant={variant}
          size="lg"
          border="2px"
          borderColor={borderColor}
          borderRadius={borderRadius}
          _placeholder={{ color: placeholderColor }}
        />
        <FormErrorMessage>
          {(error?.type === "required" && `${name} is required`) ||
            error?.message}
        </FormErrorMessage>
      </FormControl>
    </div>
  );
}
