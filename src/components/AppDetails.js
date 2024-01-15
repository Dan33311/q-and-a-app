const Details = ({ setIsPlaying }) => {

  return (
    <>
      <button className="green-btn text-container" onClick={() => setIsPlaying(true)}>Play</button>
      <div className="gradient-bg app-details">
        {/* <p className='description'>ReactQuiz, is a quiz competition where contestants have to correctly answer a series of multiple-choice questions in order to advance to the next category.</p> */}
        {/* <p className='description'>Quizz, es un concurso de preguntas en el que los concursantes tienen que responder correctamente a una serie de preguntas de opción múltiple para pasar a la siguiente categoría.</p> */}
        {/* <h3>How to play: </h3> */}
        {/* <h3>Cómo se juega: </h3> */}
        {/* <p className='description'>Select a category from five available categories.</p>             */}
        {/* <p className='description'>Selecciona una categoría de las cinco disponibles.</p>             */}
        {/* <p className='description'>Five questions per category, four multiple-choice answers.</p> */}
        {/* <p className='description'>Cinco preguntas por categoría, cuatro respuestas de opción múltiple.</p> */}
        {/* <p className='description'>Select one of the multiple-choice question.</p> */}
        {/* <p className='description'>Selecciona una de las preguntas de opción múltiple.</p> */}
        {/* <p className='description'>You can only select once the answer you think is correct.</p> */}
        {/* <p className='description'>Sólo puedes seleccionar una vez la respuesta que creas correcta.</p> */}
        {/* <p className='description'>If the selected answer is correct, you will earn 0.0001 BTC and advance to the next question.</p> */}
        {/* <p className='description'>Si la respuesta seleccionada es correcta, ganarás 0,0001 BTC y avanzarás a la siguiente pregunta.</p> */}
        {/* <p className='description'>If the selected answer is incorrect, you will lose the accumulated BTC and the game will end.</p> */}
        {/* <p className='description'>Si la respuesta seleccionada es incorrecta, perderás los BTC acumulados y el juego terminará.</p> */}
        {/* <p className='description'>You have the option to withdraw from the quiz at any time and take your accumulated BTC with you.</p> */}
        {/* <p className='description'>Tienes la opción de retirarte del concurso en cualquier momento y llevarte los BTC acumulados.</p> */}
        <svg xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="goo">
              <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
              <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8" result="goo" />
              <feBlend in="SourceGraphic" in2="goo" />
            </filter>
          </defs>
        </svg>
        <div className="gradients-container">
          <div className="g1"></div>
          <div className="g2"></div>
          <div className="g3"></div>
          <div className="g4"></div>
          <div className="g5"></div>
          <div className="interactive"></div>
        </div>
      </div>
    </>
  )
}

export default Details