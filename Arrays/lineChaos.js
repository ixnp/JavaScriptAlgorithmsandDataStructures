
// It's New Year's Day and everyone's in line for the Wonderland rollercoaster ride! There are a number of people queued up, and each person wears a sticker indicating their initial position in the queue.
// Initial positions increment by  from  at the front of the line to  at the back.

// Any person in the queue can bribe the person directly in front of them to swap positions.If two people swap positions, they still wear the same sticker denoting their original places in line.

// Fascinated by this chaotic queue, you decide you must know the minimum number of bribes that took place to get the queue into its current state!
// hacker rank https://www.hackerrank.com/challenges/new-year-chaos/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays
function line(arr) {
  let bribes = 0;
  for (let i = 0; i < arr.length; i++) {
    let orginalIndex = arr[i] - 1

    if (orginalIndex - i > 2) {
      return 'To Chaotic';
    }
    if (orginalIndex - i == 1) {
      bribes++
    }
    if (orginalIndex - i == 2) {

      bribes = bribes + 2
    }
  }
  return bribes;
}
line([2, 1, 5, 3, 4])
// line([2,5,1,3,4])
