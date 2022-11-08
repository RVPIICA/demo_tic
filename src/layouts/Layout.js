const Layout = ({children}) => {
    return (
        <div className="container-fluid">
            <div class="p-5 mb-4 bg-light rounded-3">
                {children}
            </div>
        </div>
    )
}

export default Layout