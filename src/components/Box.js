import './Box.css'

const Box = ({children, fontColor}) => {
    return (
        <div className='box' style={{color: fontColor}}>
            {children}
        </div>
    );
}

export default Box;