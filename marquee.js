document.getElementById('eduslate1').addEventListener('mouseover', function() {
    document.getElementById('eduslate1').style.backgroundColor=getColor();
    });
document.getElementById('eduslate2').addEventListener('mouseover', function() {
    document.getElementById('eduslate2').style.backgroundColor=getColor();
    });
document.getElementById('eduslate3').addEventListener('mouseover', function() {
    document.getElementById('eduslate3').style.backgroundColor=getColor();
    });
    
function getColor()
{
    const colors=['#9DBFAF', '#BFD0F6' ,'#C7A9E6', '#FCBFEA', '#BBD1C2' ,'#fbe8c1','#fceda4'];
    return colors[Math.floor((Math.random()*colors.length))];
}

// function getColor()
// {
//     const colors=['#9DBFAF', '#BFD0F6' ,'#C7A9E6', '#FCBFEA', '#BBD1C2' ,'#fbe8c1','#fceda4'];
//     for(i=0; i<=colors.length; i++)
//     {
//         // return colors[i];
//         console.log(colors[i]);
//     }
// }
    
