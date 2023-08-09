import './EditProfile.css';


const EditProfile = () => {

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div id="edit-profile"> 
      <h2>Edite seus dados</h2>
      <p className="subtitle">Adicione sua linda imagem de perfil e conte mais sobre você.</p>
      {/* preview da imagem */}
      <form onSubmit={handleSubmit}>
        <input type="text"placeholder='NickName' />
        <input type="email" placeholder='E-mail' disabled />
        <label>
          <span>Imagem do perfil:</span>
          <input type="file" />
        </label>
        <label>
          <span>Biografia:</span>
          <input type="text" placeholder='Descrição do perfil' />
        </label>
        <label>
          <span>Quer trocar sua senha?</span>
          <input type="password" placeholder='Digite sua nova senha' />
        </label>
        <input type="submit" value="Atualizar" />
      </form>

    </div>
  )
}

export default EditProfile