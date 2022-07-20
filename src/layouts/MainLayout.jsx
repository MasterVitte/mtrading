import './MainLayout.css'

export const MainLayout = ({ title, children }) => {
  return (
    <div className="MainLayout">
      {title && <h1>{title}</h1>}
      {children}
    </div>
  )
}
