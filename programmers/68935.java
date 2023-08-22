import java.util.ArrayList;
import java.util.List;

class Solution {
    public int solution(int n) {
        if (n < 3) return n;
        List<Integer> reverseTernaryArr = new ArrayList<>();
        
        while (n > 0) {
            int temp = (int)(n % 3);
            reverseTernaryArr.add(temp);
            n /= 3;
        }
        return convertThreeToTen(reverseTernaryArr);
    }
    
    public static int convertThreeToTen(List<Integer> number) {
        int result = number.get(0)*3;
        for (int i = 1; i < number.size(); i++) {
            result += number.get(i);
            if (i != number.size()-1) result *= 3;
        }
        return result;
    }
}

/*
1. n을 계속 나눈 나머지를 배열에 저장,
    이때, 앞에서부터 순차적으로 저장하면 앞뒤 반전되어 저장됨
2. 3 => 10
    
*/