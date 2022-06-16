const Details = ({ setIsPlaying }) => {
  return (
    <div className="app-details">
      <p className='description'>ReactQuiz, is a quiz competition where contestants have to correctly answer a series of multiple-choice questions in order to advance to the next category.</p>
      {/* <p className='description'>Quizz, es un concurso de preguntas en el que los concursantes tienen que responder correctamente a una serie de preguntas de opción múltiple para pasar a la siguiente categoría.</p> */}
      <h3>How to play: </h3>
      {/* <h3>Cómo se juega: </h3> */}
      <p className='description'>Select a category from five available categories.</p>            
      {/* <p className='description'>Selecciona una categoría de las cinco disponibles.</p>             */}
      <p className='description'>Five questions per category, four multiple-choice answers.</p>
      {/* <p className='description'>Cinco preguntas por categoría, cuatro respuestas de opción múltiple.</p> */}
      <p className='description'>Select one of the multiple-choice question.</p>
      {/* <p className='description'>Selecciona una de las preguntas de opción múltiple.</p> */}
      <p className='description'>You can only select once the answer you think is correct.</p>
      {/* <p className='description'>Sólo puedes seleccionar una vez la respuesta que creas correcta.</p> */}
      <p className='description'>If the selected answer is correct, you will earn 0.0001 BTC and advance to the next question.</p>
      {/* <p className='description'>Si la respuesta seleccionada es correcta, ganarás 0,0001 BTC y avanzarás a la siguiente pregunta.</p> */}
      <p className='description'>If the selected answer is incorrect, you will lose the accumulated BTC and the game will end.</p>
      {/* <p className='description'>Si la respuesta seleccionada es incorrecta, perderás los BTC acumulados y el juego terminará.</p> */}
      <p className='description'>You have the option to withdraw from the quiz at any time and take your accumulated BTC with you.</p>
      {/* <p className='description'>Tienes la opción de retirarte del concurso en cualquier momento y llevarte los BTC acumulados.</p> */}
      <button className="green-btn" onClick={() => setIsPlaying(true)}>Play</button>
    </div>

  );
}

export default Details;