if (window.location.hostname == 'www.youtube.com')
{
	console.log('in youtube')
	var isSignin = document.querySelector('[aria-label="Sign in"]')

	if(!isSignin)
	{
		document.querySelector('[placeholder="Search"]').value = "Bengrs";
		document.querySelectorAll('[aria-label="Search"]')[1].click();
		if (window.location.pathname == '/results')
		{
			var sub = document.querySelector('[aria-label="Subscribe to Bengrs."]');
			if(sub)
			{
				sub.click();
			}
			else 
			{
				alert('Channel is not on Top or Already Subscribe');
			}
		}		
	}
	else
	{
		isSignin.click();	
	}
}

if (window.location.hostname == 'accounts.google.com')
{
	console.log('in google');
	if (window.location.pathname == '/signin/v2/identifier')
	{
		var isEmail = document.querySelector('[type="email"]');
	
		if(isEmail)
		{
			isEmail.value = "mail@gmail.com";
			setTimeout(()=>{
				console.log('enterd');
				next();
			}, 5000);
		}
	}
	if (window.location.pathname == '/signin/v2/challenge/pwd')
	{
		var isPass = document.querySelector('[type="password"]');
		if(isPass) 
		{
		isPass.value = "password"
		setTimeout(()=>{
			console.log('enterd');
			console.log(isPass.value);
			next();
		}, 8000);
		}
	}
	
	function next(){
		document.querySelectorAll('[type="button"]').forEach(a=>{
		if (a.textContent ==='Next')
		{
			a.click();
		}});
	}
}
