import * as yup from 'yup'

export const schema = yup
  .object()
  .shape({
    email: yup.string().email().required(),
    password: yup.string().min(8).required(),
    name: yup.string().required(),
    surname: yup.string().required(),
    phone: yup.string().min(13).max(13).required()
  })
  .required()

// lapidar esse schema posteriormente
