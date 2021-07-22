import Swal from 'sweetalert2'

export default class Notification {
  /**
 *
 * @param {string} title The title text.
 * @param {string} text The body text.
 * @param {string} icon 'success', 'error', 'info', 'warning', or 'question'.
 * @param {string} confirmButtonText The text of your confirm button.
 * -----------------------------------
 * {@link https://sweetalert2.github.io/#configuration|Check out Sweet Alerts}
 */
  static async confirmAction(title = 'Are you sure?', text = "You won't be able to revert this!", icon = 'warning', confirmButtonText = 'Yes, delete it!') {
    try {
      // @ts-ignore
      const res = await Swal.fire({
        title: title,
        text: text,
        icon: icon,
        showCancelButton: true,
        // confirmButtonColor: '#4f6031',
        // cancelButtonColor: '#8b2f15',
        confirmButtonText: confirmButtonText
      })
      if (res.isConfirmed) {
        return true
      }
      return false
    } catch (error) {
      return false
    }
  }

  /**
 *
 * @param {string} title The title text
 * @param {string} display 'success', 'error', 'info', 'warning', or 'question'.
 * @param {string} position 'top', 'top-start', 'top-end', 'center', 'center-start', 'center-end', 'bottom', 'bottom-start', or 'bottom-end'.
 * @param {number} timer Time in milliseconds.
 * @param {boolean} progressBar Show progress bar or not respectively.
 * -----------------------------------
 * {@link https://sweetalert2.github.io/#configuration|Check out Sweet Alerts}
 */
  static toast(title = 'Warning!', display = 'warning', position = 'top-end', timer = 1500, progressBar = false) {
    // @ts-ignore
    Swal.fire({
      title: title,
      icon: display,
      position: position,
      // background: '#f9f7f3',
      timer: timer,
      timerProgressBar: progressBar,
      toast: true,
      showConfirmButton: false,
      showClass: {
        popup: 'animate__animated animate__fadeInDown animate__faster',
        icon: 'animate__animated animate__heartBeat animate__delay-1s'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp animate__delay-1s'
      }
    })
  }
}
