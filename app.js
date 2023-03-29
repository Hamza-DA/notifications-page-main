const unreadCount = document.querySelector('#unreadCount')
const notificationHeader = document.querySelector('#notificationHeader')
const notifications = document.querySelectorAll('.notification')
const unreadNotifications = document.querySelectorAll('.unread')
const readButton = document.querySelector('#readButton')
let count = 3;

unreadCount.textContent = count


readButton.addEventListener('click', () => {
    unreadCount.textContent = 0
    unreadNotifications.forEach(notification => {
        notification.classList.remove('unread')
    })
})


















// for (let i = 0; i <= count; i++) {
//     unreadCount.textContent = i
// }

// const updateUnreadCount = () => {
//     for (let i = 0; i <= count; i++) {
//         unreadCount.textContent = i
//     }
// }
// readButton.addEventListener('click', () => {
//     // unreadNotifications.classList.remove('unread')
//     unreadNotifications.forEach(notification => {
//         notification.classList.remove('unread')
//     });
//     updateUnreadCount()
// })