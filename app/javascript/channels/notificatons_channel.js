import consumer from "channels/consumer"

consumer.subscriptions.create("NotificatonsChannel", {
  received(data) {
    if (data['notice']) {
      alert(data['notice'])
    }
    const html = data['article']
    const element = document.querySelector("#articles")
    element.insertAdjacentHTML("beforeend", html)
  }
});
