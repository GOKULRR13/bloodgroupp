
function determineBloodGroup() 
{

    const antiA = document.getElementById('antiA').value
    console.log( 'test result of anti-A with blood is  ' + antiA);
     
    const antiB = document.getElementById('antiB').value;
    console.log( 'test result of anti-B with blood is  ' + antiA);

    const antiD = document.getElementById('antiD').value;
    console.log( 'test result of anti-D with blood is  ' + antiD);

    let bloodGroup = '';

    
    if (antiA === 'positive' && antiB === 'negative')
         {
        bloodGroup = 'A';
    } 
    else if (antiA === 'negative' && antiB === 'positive') 
        {
        bloodGroup = 'B';
    } 
    else if (antiA === 'positive' && antiB === 'positive')
         {
        bloodGroup = 'AB';
    } 
    else if (antiA === 'negative' && antiB === 'negative') 
        {
        bloodGroup = 'O';
    }
    
    if (bloodGroup !== '') {
        if (antiD === 'positive') 
            {
            bloodGroup += '+';
        } 
        else if (antiD === 'negative')
             {
            bloodGroup += '-';
        }


    const endResult=document.getElementById('result').textContent = `Blood group is identified to be :  ${bloodGroup}`;
    console.log(endResult);
        
        
    } 
    else 
    {
        document.getElementById('result').textContent = ' Select valid test results for all fields.';
    }
    
}
