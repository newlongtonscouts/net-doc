export const FlashMessage = ({
  className,
  message
}: {
  className: string
  message: string
}) => {
  return (
    <div className={`${className} rounded-sm shadow-sm p-1 mb-2`}>
      {message}
    </div>
  )
}
