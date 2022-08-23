function PopupWithForm(props) {
    return (
        <>
        <section className={`popup popup_type_${props.name} ${props.isOpen ? "popup_opened" : ""}`}>
            <div className="popup__container">
            <button className="popup__close-button" type="button" onClick={props.onClose}></button>
            <h2 className="popup__title">{props.title}</h2>
            <form className="popup__form" name={`${props.name}`} noValidate>
                {props.children}
                <button className="popup__save-button" type="submit">Сохранить</button>
            </form>
            </div>
        </section>
      </>
    );
}

export default PopupWithForm;