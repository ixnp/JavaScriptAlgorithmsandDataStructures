'use strict'

//Sherlock considers a string to be valid if all characters of the string appear the same number of times. It is also valid if he can remove just 1 character at 1 index in the string, and the remaining characters will occur the same number of times. Given a string , determine if it is valid. If so, return YES, otherwise return NO.

//For example, if s=abc, it is a valid string because frequencies are {a:1,b:1,c:1}. So is s=abcc  because we can remove one  and have  of each character in the remaining string. If s=abccc however, the string is not valid as we can only remove  occurrence of c. That would leave character frequencies of {a:1,b:1,c:2}.

// aabbcd NO
// aabbccddeefghi NO
// abcdefghhgfedecba YES

//create an objectMap to store the characters and their frequencies
// set var swap to false 
//loop through object map, if any character has a frequency more then another
// if there is a character that is +1 && swap is false 
//switch swap to true and continue 
//else return NO
//renturn YES at the end of the loop

function isValid(str) {
  let upper = str.toUpperCase();
  let characterMap = mapper(upper)
  let swap = false;

  for (let char in characterMap) {
    for (let char2 in characterMap) {

      if (Math.abs(characterMap[char] - characterMap[char2]) >= 1) {
        if (swap === false) {
          swap = true;
        } else if (swap === true) {

          return 'NO'
        }
      }
    }
    return 'YES'
  }

  return characterMap
}

function mapper(str) {
  let map = {};
  let splitString = str.split('');
  for (let i = 0; i < splitString.length; i++) {
    if (!map[splitString[i]]) {

      map[splitString[i]] = 1;

    } else {
      map[splitString[i]]++
    }
  }
  console.log(map)
  return map;
}

//Test Cases 
// isValid('qcfbdopdgvjanhdhijcgkchzqfbvwlxpncsqthvzefztoebypdgahnzzucutnsiawctplooqtqjkumikspmbelbzpvscncekexbroqjjgvtahemzvybzleaazsepwjbcicuysdiaaddihpjeomebqgcsbghxriccmwahbihcmmmvcxaskgtcmxungdnxnpzancjokssyfgwhewboewsqupgastzgkzixdrnpjgqommxqkagoxzgtootihsqttyqwremdmetaqttatzqsawlqlezuzrqusgrjmfoyjibbbudwttpwramchnzghpazxtikaxklhlmifrebkvxcwlgfbhliwnhwjrglqsxxglhldompjlrhxamahzigpreakmlbekakyiydymsjymrxmfxvfhdwahwktjlaumkswivwvpfvbysperllaqjayhktqwtkkgeiobglrniumakstxftnotnxehncaaoggyxiekbrtvfvfxpeeksuefrkoforhexncwvihybcuhxbgmglzahfhzpwgfnnjmcnlaxsyywuftwmiezhegmnfdjnkycvlfiwffqddmylhwxpcwwgektknfzzfcuqhcoojgrpuracpztrxszbcvnsanrfpmyyqomcxfrrzrvospiphhqlcgdetxmklmkbaydxdwrepmthdbwmkpypvdtqafalrmpukutnrksiznqeqoradppyulovsqikczgmwzcpmwxnjnrbekdhbviwgytypdktdsibumqginvtdouhzzqauyycxrdovpjairbcdrkngfglvcsucjxwjxbgpewmtgobxpfdipqqwxcsbwmdhlcrjdzajymcecgdtlgbbztxwxrzugddrhucmwcvuqxasddlpkosjirhfjibplfiublgznbtgztyexmvjanukhdsqlthzaptcaabqbxwcqwhpicalqwvxznpnjwmjnflqfpijmelecswnxwyptvmujdhubtdobrgiioruufaxxwkwtklofziqcq')
// isValid('aabbccddeefghi')
// isValid('abcdefghhgfedecba')
// isValid('abcdefghhgfedecba')
// aa
// bb
// cc
// defghhgfede

//BigO
//O(n^2)