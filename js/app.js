let counter = 0;
while(counter <= 50) {
console.log(counter);
counter = counter + 1;
}
let neg_counter = 0;
while(neg_counter >= -50) {
console.log(neg_counter);
neg_counter = neg_counter - 1;
}
let pos_counter = 0;
while(pos_counter <= 100) {
 console.log(pos_counter);
pos_counter = pos_counter + 2;
}
let players = [`janice`,`jake`,`jack`];
let user_counter = 0;
let user_points = [20,40,80];
let user_injury = [`true`,`false`,`false`];
for(let user_counter=0; user_counter<players.length; user_counter=user_counter+1){

    console.log(user_counter)
}
for(let user_counter=0; user_counter<user_points.length; user_counter=user_counter+1){

    console.log(`${players[user_counter]} has scored ${user_points[user_counter]} points`)
}
for(let user_counter=0; user_counter<players.length; user_counter=user_counter+1){

    if(user_injury[user_counter] === false){
       console.log(`${players[user_counter]} has scored ${user_points[user_counter]} points`) 
    }
user_counter = user_counter +1;
}
