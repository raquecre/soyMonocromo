const CardContact = props => {

    const { iconTypeContact, textContact } = props
    return (
        <div className={'flex gap-2 text-3xl text-black font-semibold mb-5 items-center hover:{color}'}>
            {iconTypeContact}
            <p>{textContact}</p>
        </div>
    )
}

export default CardContact