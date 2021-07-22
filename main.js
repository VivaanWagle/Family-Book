var images = ["https://i.postimg.cc/MKdhy06Z/family.jpg","https://graphicriver.img.customer.envatousercontent.com/files/301807601/preview_image.jpg?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=590&s=18fc17bb213c0ed7d66d4271ee4245b9", "https://www.missmalini.com/wp-content/uploads/2014/06/homer-simpson-1280x1024.jpg" , "https://wallpapercave.com/wp/wp6424362.png", "https://thumbs.dreamstime.com/z/sister-portrait-pretty-teenage-girl-schoolgirl-long-brown-hair-satchel-bag-school-uniform-skirt-blouse-daughter-86364433.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvDf39NGDc5J3rUmlJ5bMeLJ0GHeik5X0EUA&usqp=CAU", "https://image.shutterstock.com/image-illustration/cartoon-old-woman-cane-260nw-1376524529.jpg"];
var names = ["Family Book","Vijay Wagle", "Sachin Wagle", "Vivaan Wagle", "Aisha Wagle", "Mitali Wagle","Shubhagi Wagle"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 5
    if(i > numbers_of_family_member_in_array )
    {
        i = 0;
    }
    var updatedImage = images[i];
    var updatedName  = names[i];
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
