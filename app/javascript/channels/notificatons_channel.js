import consumer from "channels/consumer"

consumer.subscriptions.create("NotificatonsChannel", {
  received(data) {
    console.log(data)
    const html = data
    const element = document.querySelector("#articles")
    element.insertAdjacentHTML("beforeend", html)
  }
});
