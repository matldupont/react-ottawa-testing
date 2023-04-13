export const Pane = ({ children, className }) => {
  return (
    <div
      className={`mx-2 rounded-xl border border-neutral-200/25 bg-white bg-opacity-70 px-32 py-16 shadow-lg backdrop-blur-sm backdrop-brightness-50  backdrop-saturate-150 dark:bg-black dark:bg-opacity-60 ${className}`}>
      {children}
    </div>
  )
}
