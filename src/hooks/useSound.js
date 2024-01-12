import retrySound from '../assets/retry-game-2016.wav'
import wrongAnswerSound from '../assets/player-losing-or-failing-2042.wav'
import winSound from '../assets/final-level-bonus-2061.wav'

export const useSound = (sound) => {
  const soundToUse = new Audio(sound)
  if (soundToUse == winSound) {
    soundToUse.volume = 0.5
  }
  if (soundToUse == retrySound) {
    soundToUse.volume = 0.3
  }
  soundToUse.play()
}