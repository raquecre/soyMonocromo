const CardContact = props => {

    const { iconTypeContact, textContact } = props
    return (
        <div className="flex gap-2 text-xl text-white mb-5">
            {iconTypeContact}
            <p>{textContact}</p>
        </div>
    )
}

export default CardContact