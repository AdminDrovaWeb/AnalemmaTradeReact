import './CustomButtonStyles.scss';

interface ICustomButtonProps {
    theme: string;
    name?: string | number | null
}

function CustomButton(props: ICustomButtonProps) {
    return (
        <>
            <div className={`button button_theme_${props.theme}`}>
                {props.name ?? <div> {props.name} </div>}
            </div>
        </>
    )
}

export default CustomButton
