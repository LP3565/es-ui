/* eslint-disable prefer-const */
export const useRipple = () => {
  const rippleStarts: HTMLSpanElement[] = []
  let isDown = false

  const createRipple = (rect: { width: string; height: string; left: string; top: string }) => {
    const rippleStart = document.createElement('span')
    rippleStart.classList.add('ripple-start', 'start')
    const rippleEnd = document.createElement('span')
    rippleEnd.classList.add('ripple-end')
    rippleStart.appendChild(rippleEnd)

    rippleStart.style.width = rect.width
    rippleStart.style.height = rect.height
    rippleStart.style.left = rect.left
    rippleStart.style.top = rect.top

    rippleStarts.push(rippleStart)

    return rippleStart
  }

  const startRipple = (event: MouseEvent) => {
    isDown = true
    const target = event.currentTarget as Element
    const { width, height, left, top } = target.getBoundingClientRect()

    let rippleX, rippleY
    let clientX = 0,
      clientY = 0

    clientX = event.clientX
    clientY = event.clientY

    rippleX = clientX - left
    rippleY = clientY - top

    const sizeX = Math.max(width - rippleX, rippleX) * 2
    const sizeY = Math.max(height - rippleY, rippleY) * 2
    const circle = Math.sqrt(sizeX ** 2 + sizeY ** 2)

    const rippleStart = createRipple({
      width: `${circle}px`,
      height: `${circle}px`,
      left: `${-circle / 2 + rippleX}px`,
      top: `${-circle / 2 + rippleY}px`,
    })

    const rippleRoot = target.querySelector(':scope > .ripple-root')
    rippleRoot?.appendChild(rippleStart)
  }

  const stopRipple = () => {
    if (!isDown) return
    isDown = false

    const rippleStart = rippleStarts.shift()

    if (!rippleStart) return

    rippleStart.addEventListener('animationend', (event: AnimationEvent) => {
      if (event.animationName === 'end') {
        rippleStart.remove()
      }
    })

    rippleStart.classList.add('end')
  }

  return {
    startRipple,
    stopRipple,
  }
}
