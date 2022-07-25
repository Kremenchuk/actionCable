class NotificatonsChannel < ApplicationCable::Channel
  def subscribed
    stream_from "NotificatonsChannel"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
