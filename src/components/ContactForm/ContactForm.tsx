import './contactForm.css'
import { useForm, SubmitHandler } from 'react-hook-form'
type FormValues = {
  name: string;
  surname: string;
  email: string;
  phone: string;
  category: string;
  message: string;
}
export default function ContactForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = data => {
    // Aquí puedes manejar la lógica de envío, como enviar los datos a una API

    console.log(data)
  }
  return (
    <form className="contact-form-container flex-box" onSubmit={handleSubmit(onSubmit)}>
      <ul className='inputs-container flex-box'>
        <li className='flex-box'>
          <label htmlFor="name">Name*</label>
          <input id="name" {...register('name', { required: true })} />
          {errors.name && <span className='contact-error'>This field is required</span>}
        </li>
        <li className='flex-box'>
          <label htmlFor="surname">Surname*</label>
          <input id="surname" {...register('surname', { required: true })} />
          {errors.surname && <span className='contact-error'>This field is required</span>}
        </li>
        <li className='flex-box'>
          <label htmlFor="email">Email*</label>
          <input id="email" type="email" {...register('email', {
            required: true,
            pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
          })} />
          {errors.email && <span className='contact-error'>This field is required</span>}
          {errors.email?.type === 'pattern' && <span className='contact-error'>Invalid email</span>}
        </li>
        <li className='flex-box'>
          <label htmlFor="phone">Phone*</label>
          <input id="phone" type="tel" {...register('phone', { required: true })} />
          {errors.phone && <span className='contact-error'>This field is required</span>}
        </li>
        <li className='flex-box'>
          <label htmlFor="category">Category*</label>
          <select id="category" {...register('category', { required: true })}>
            <option value="">Select</option>
            <option value="booking">Booking</option>
            <option value="press">Press</option>
            <option value="mixAndMastering">Mix & Mastering</option>
            <option value="collaboration">Collaboration</option>
            <option value="lessons">Lessons</option>
            <option value="other">Other</option>
          </select>
          {errors.category && <span className='contact-error'>This field is required</span>}
        </li>
        <li className='flex-box'>
          <label htmlFor="message">Message*</label>
          <textarea id="message" {...register('message', { required: true })} />
          {errors.message && <span className='contact-error'>This field is required</span>}
        </li>
      </ul>

      <button type="submit" value="Enviar" >Enviar</button>
    </form>
  )
}