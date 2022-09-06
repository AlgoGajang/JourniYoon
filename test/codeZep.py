# 연속하는 문자열 앞뒤로 분할
def solution(s:str):
  answer = []
  l, cnt = 0, 1
  temp = ""
  
  for r in range(1, len(s)):
    if s[l] == s[r]:
      cnt += 1
    else:
      if cnt > 1:
        answer.append("")
        temp += s[l]
        l = r
      else:
        temp += s[l]
    answer.append(temp)
  return answer

print(solution("pizza"))
print(solution("aabcddddefggg"))
