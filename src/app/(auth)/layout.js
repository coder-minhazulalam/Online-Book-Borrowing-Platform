import { ToastContainer } from "react-toastify";


const layout = ({ children }) => {
    return (
        <>
        <main>
            {children}
        </main>
         <ToastContainer />
        </>

    );
};

export default layout;