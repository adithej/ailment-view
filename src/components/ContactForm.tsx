import Button from './ui/Button'
import { addContact } from '../store/slices/ContactSlice'
import { useDispatch } from 'react-redux'
import { useState } from 'react'

const ContactForm: React.FC = () => {
  const dispatch = useDispatch()

  const [formData, setFormData] = useState({
    name: '',
    age: '',
    email: '',
    city: '',
    state: '',
    pin: '',
    sex: '',
    active: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const newContact = {
      ...formData,
      id: Date.now().toString(),
    }
    // Here you would typically dispatch an action to add the contact to your Redux store
    console.log('New contact:', newContact)
    dispatch(addContact(newContact))
    // Reset form after submission
    setFormData({
      name: '',
      age: '',
      email: '',
      city: '',
      state: '',
      pin: '',
      sex: '',
      active: '',
    })
  }

  return (
    <div className='w-[70%] h-[80%] p-5 bg-neutral-200 shadow-lg rounded-lg overflow-hidden flex flex-col'>
      <h1 className='text-2xl font-palanquin font-bold mb-4'>Add Details</h1>
      <form
        onSubmit={handleSubmit}
        className='flex flex-col gap-4 font-montserrat'
      >
        <div className='flex gap-4'>
          <div className='flex-1'>
            <label htmlFor='name' className='block mb-1'>
              Name
            </label>
            <input
              type='text'
              id='name'
              name='name'
              value={formData.name}
              onChange={handleChange}
              placeholder='Enter your name'
              className='w-full p-2 rounded border'
            />
          </div>
          <div className='flex-1'>
            <label htmlFor='age' className='block mb-1'>
              Age
            </label>
            <input
              type='number'
              id='age'
              name='age'
              value={formData.age}
              onChange={handleChange}
              placeholder='Enter your age'
              className='w-full p-2 rounded border'
            />
          </div>
        </div>

        <div>
          <label htmlFor='email' className='block mb-1'>
            Email
          </label>
          <input
            type='email'
            id='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            placeholder='Enter your email'
            className='w-full p-2 rounded border'
          />
        </div>

        <div className='flex gap-4'>
          <div className='flex-1'>
            <label htmlFor='sex' className='block mb-1'>
              Sex
            </label>
            <select
              id='sex'
              name='sex'
              value={formData.sex}
              onChange={handleChange}
              className='w-full p-2 rounded border'
            >
              <option value=''>Select</option>
              <option value='male'>Male</option>
              <option value='female'>Female</option>
              <option value='prefer_not_to_say'>Prefer not to say</option>
            </select>
          </div>

          <div className='flex-1'>
            <label htmlFor='active' className='block mb-1'>
              IsActive
            </label>
            <select
              id='active'
              name='active'
              value={formData.active}
              onChange={handleChange}
              className='w-full p-2 rounded border'
            >
              <option value=''>Select</option>
              <option value='yes'>Yes</option>
              <option value='no'>No</option>
            </select>
          </div>
        </div>

        <div className='flex gap-4'>
          <div className='flex-1'>
            <label htmlFor='city' className='block mb-1'>
              City
            </label>
            <input
              type='text'
              id='city'
              name='city'
              value={formData.city}
              onChange={handleChange}
              placeholder='Enter your city'
              className='w-full p-2 rounded border'
            />
          </div>
          <div className='flex-1'>
            <label htmlFor='state' className='block mb-1'>
              State
            </label>
            <input
              type='text'
              id='state'
              name='state'
              value={formData.state}
              onChange={handleChange}
              placeholder='Enter your state'
              className='w-full p-2 rounded border'
            />
          </div>
        </div>

        <div>
          <label htmlFor='pin' className='block mb-1'>
            PIN
          </label>
          <input
            type='text'
            id='pin'
            name='pin'
            value={formData.pin}
            onChange={handleChange}
            placeholder='Enter your PIN'
            className='w-full p-2 rounded border'
          />
        </div>

        <Button primary type='submit' className='p-4 mt-3'>
          Submit
        </Button>
      </form>
    </div>
  )
}

export default ContactForm
