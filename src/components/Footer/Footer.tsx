import Brand from '../Brand'

export default function Footer() {
  return (
    <footer className='bg-EEEEEE py-5 font-brave-ecom'>
      <div className='container'>
        <div className='mb-4 flex items-center justify-center'>
          <Brand />
        </div>
        <p className='text-center text-secondary-1A162E'>©2022 - Copyright Trung</p>
      </div>
    </footer>
  )
}
