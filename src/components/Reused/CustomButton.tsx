import './CustomButtonStyles.scss';

interface ICustomButtonProps {
    theme: 'gold' | 'dark';
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
