import { useNavigate } from "react-router-dom";
import { DynamicProduct } from "./dynamicProduct";

export function CustomButton(props) {
    const navigate = useNavigate();
    function buttonClick() {
        // navigate('/newProduct');
        <DynamicProduct />
    }

    return (
        <button onClick={buttonClick()}>{props.value}</button>
    )
}