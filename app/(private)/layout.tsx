export default function  DashboardLayout({
    children,
}:Readonly<{
    children:React.ReactNode
}>){
    return(
      <div>
        <h1>Privado</h1>
        {children}
      </div>
    )

}