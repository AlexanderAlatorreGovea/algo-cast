function validateSequence() {
    let sequenceIdx = 0;

    for(let i = 0; i < array.length; i++) {
      if(sequenceIdx === sequence.length) break
  
      if(array[i] === sequence[sequenceIdx]) sequenceIdx++
    }
    
    return sequenceIdx === sequence.length
}