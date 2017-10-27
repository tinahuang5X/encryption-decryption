# Encryption/Decryption!!

### Step One: Implement Encryption

#### Set Up
Split up into groups.
Choose a project manager and have that person fork and clone this repo.
All other team members, fork and clone the project manager's repo.

#### Description
As a group, build an encryption function. Each team member needs to create a function that takes a string and returns an altered version. Chain each member's functions and wrap them into one function.

#### Implementation
In order to chain together every person's function, every person will submit a *pull request* to their project manager once their encryption function is complete.

Once all the pull requests have been merged, begin as a group, to wrap and chain all the functions into one function.

**Make sure you all do not code in the same file; Be sure to establish a proper git workflow and figure out how everyone should structure their project directory.**

**Try to plan ahead and identify what could lead to potential merge conflicts and think about how to avoid them.**



#### Example:

```js
function encrypt(string) {
	var encryptedString = robertosCrypter(string);
	var superEncryptedString = dannysCrypter(encryptedString);
	return superEncryptedString;
}
```

### Step Two

After building an awesome encrypter, build a decrypter for your function. Each member should have a decrypting function that undo's the encryption of their function. When chained together in the same order, it should return the same string that was encrypted.

Be sure to follow a similar process with encryption. Every person works on their machine, makes a pull request, and then chain all the functions together.

#### Example:

```js
var encryptedString = encrypt(inputString);
var decryptedString = decrypt(encryptedString);
inputString === decryptedString // true
```


### Step Three:

Have project manager make a pull request to the original project.
