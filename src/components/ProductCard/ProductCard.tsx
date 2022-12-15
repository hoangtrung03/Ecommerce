import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

interface ProductCardProps {
  isLoading?: boolean
}

const ProductCard: React.FC<ProductCardProps> = () => {
  const { t } = useTranslation()
  return (
    <>
      <div className='-mx-3 grid grid-cols-12 gap-y-3'>
        <div className='col-span-full mx-auto px-3 md:col-span-6 lg:col-span-3'>
          <div className='w-full max-w-sm rounded-lg bg-white shadow-md duration-200 hover:box-shadow-lg dark:border-gray-700 dark:bg-gray-800'>
            <Link to='/login' title='iPhone 13 128GB | Chính hãng VN/A'>
              <img
                className='w-full rounded-t-lg p-8'
                src='src/assets/iphone13.jpg'
                alt='iPhone 13 128GB | Chính hãng VN/A'
                title='iPhone 13 128GB | Chính hãng VN/A'
              />
            </Link>
            <div className='px-5 pb-5'>
              <Link to='/login' title='iPhone 13 128GB | Chính hãng VN/A'>
                <h5 className='text-xl font-semibold tracking-tight text-gray-900 dark:text-white'>
                  iPhone 13 128GB | Chính hãng VN/A
                </h5>
              </Link>
              <div className='mt-2.5 mb-5 flex items-center'>
                <svg
                  aria-hidden='true'
                  className='h-5 w-5 text-yellow-300'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <title>First star</title>
                  <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
                </svg>
                <svg
                  aria-hidden='true'
                  className='h-5 w-5 text-yellow-300'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <title>Second star</title>
                  <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
                </svg>
                <svg
                  aria-hidden='true'
                  className='h-5 w-5 text-yellow-300'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <title>Third star</title>
                  <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
                </svg>
                <svg
                  aria-hidden='true'
                  className='h-5 w-5 text-yellow-300'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <title>Fourth star</title>
                  <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
                </svg>
                <svg
                  aria-hidden='true'
                  className='h-5 w-5 text-yellow-300'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <title>Fifth star</title>
                  <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
                </svg>
                <span className='mr-2 ml-3 rounded bg-blue-100 px-2.5 py-0.5 text-xs font-semibold text-blue-800 dark:bg-blue-200 dark:text-blue-800'>
                  5.0
                </span>
              </div>
              <div className='flex items-end justify-between'>
                <div className='flex flex-col'>
                  <span className='text-lg font-semibold text-gray-400 line-through dark:text-white'>24.990.000 ₫</span>
                  <span className='text-xl font-bold text-red-500 dark:text-white'>19.190.000 ₫</span>
                </div>
                <Link
                  to=''
                  className='rounded-md bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                >
                  {t('button.addtocart')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default ProductCard
