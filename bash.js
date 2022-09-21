const pwd = require('./pwd.js');
const ls = require('./ls.js');
const cat = require('./cat.js');

process.stdout.write('prompt > ');
process.stdin.on('data', (data)=> {
  const cmd = data.toString().trim().split(' ');
    
    const argument1 = cmd[0];
    const argument2 = cmd[1];
    
  if(argument1 ==='pwd'){
      
      pwd();
    
  }
  
  if(argument1 ==='ls'){
      
      ls();
    
  }
  
  if(argument1 ==='cat'){
      
      cat(argument2);
    
  }
  
  
  process.stdout.write('\nprompt > ');
})