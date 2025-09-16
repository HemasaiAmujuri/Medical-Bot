

function NextButton({ onClick }){

    return(
        <div className='bg-blue-900'>
            <input type="button" className='h-10 w-20 bg-blue-500 ml-250 rounded-4xl' value = 'NEXT' onClick={onClick}/>
        </div>
    )

}


export default NextButton;