export default function Layout({ children, label }) {
    return (
        <>
            <div className="flex-1 w-full mx-2">
                <div className="inputcontainer">
                    {label}
                </div>
                <div className="flex p-1 my-2 bg-white border border-gray-200 rounded">
                    {children}
                </div>
            </div>
        </>
    )
}
