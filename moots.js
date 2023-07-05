// Mendapatkan referensi ke elemen-elemen yang diperlukan
const friendIdInput = document.getElementById('friend-id');
const addFriendBtn = document.getElementById('add-friend-btn');
const notificationDiv = document.getElementById('notification');

// Menambahkan event listener untuk tombol "Tambah Teman"
addFriendBtn.addEventListener('click', function() {
  const friendId = friendIdInput.value;
  if (friendId) {
    addFriend(friendId);
  } else {
    displayNotification('ID Teman harus diisi');
  }
});

// Fungsi untuk menambahkan teman
function addFriend(friendId) {
  // Implementasi logika untuk menambahkan teman
  // Misalnya, mengirim permintaan ke server atau memperbarui database

  // Menampilkan pemberitahuan "Anda berhasil berteman"
  displayNotification('Anda berhasil berteman');
}

// Fungsi untuk menampilkan pemberitahuan
function displayNotification(message) {
  notificationDiv.textContent = message;
}
