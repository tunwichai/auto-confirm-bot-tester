import { Notification as ElNotification } from "element-ui";

const messages = [
  { title: "ข้อความแจ้งเตือน", message: "มีงานใหม่เข้ามา", type: "info" },
  { title: "ข้อความแจ้งเตือน", message: "มีการอัพเดทสถานะงาน", type: "success" },
  { title: "ข้อความแจ้งเตือน", message: "มีข้อความใหม่จากระบบ", type: "warning" },
  { title: "ข้อความแจ้งเตือน", message: "กรุณาตรวจสอบการแจ้งเตือน", type: "info" }
];

export function setupNotifications() {
  const notificationIntervals = [];
  const intervals = [5000, 13000, 31000];
  
  intervals.forEach((interval, index) => {
    const intervalId = setInterval(() => {
      const notification = messages[index % messages.length];
      ElNotification({
        title: notification.title,
        message: `${notification.message} (${interval/1000}s)`,
        type: notification.type,
        position: "top-right",
        duration: interval === 31000 ? 0 : 4000,
        showClose: true,
        offset: 30
      });
    }, interval);
    
    notificationIntervals.push(intervalId);
  });

  return notificationIntervals;
}

export function clearAllIntervals(intervals) {
  intervals.forEach(interval => {
    clearInterval(interval);
  });
}