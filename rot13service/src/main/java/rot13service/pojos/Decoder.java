package rot13service.pojos;

import lombok.Data;

import java.util.stream.Collectors;

@Data
public class Decoder {
    private String decodedMessage;
    private String encodedMessage;

    private String decode(String encodedMessage) {
        return encodedMessage
                .chars()
                .map(n -> {
//                  Uppercase
                    if (n >= 97 && n <= 122) {
                        return (n + 13 > 122) ? n - 13 : n + 13;
//                  Lowercase
                    } else if (n >= 65 && n < +90) {
                        return (n + 13 > 90) ? n - 13 : n + 13;
//                  Non-Letter
                    } else return n;
                })
                .mapToObj(n -> (char) n)
                .map(String::valueOf)
                .collect(Collectors.joining());
    }
}
