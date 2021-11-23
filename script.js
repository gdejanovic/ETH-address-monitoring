 watchaddress= 'ETH ADDRESS YOU WANT TO MONITOR';
 let beat = new Audio('http://penguinradio.dominican.edu/Sound%20FX%20Collection/Air%20Horn-SoundBible.com-964603082.mp3');
 let apikey = 'ETHERSCAN YOUR API KEY';

function fetchBalance(){
    fetch(`https://api.etherscan.io/api?module=account&action=balance&address=${watchaddress}&tag=latest&apikey=${apikey}/`, {

})
.then(response => response.json())
.then(result => {
  console.log('Balance:', result.result);
  localStorage.setItem(watchaddress,result.result);
  document.getElementById('balance').innerHTML=(localStorage.getItem(watchaddress,balance.balance));
  if (result.resut !==document.getElementById('balance').value){console.log("Money"); beat.play() ;} 
})
.catch(error => {
  console.error('Error:', error);
});
}

setInterval (() => {
    fetchBalance();

  }, 60000)
 