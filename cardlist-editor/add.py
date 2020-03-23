import sys
with open('./scryfall-deck.txt') as f:
    arr = f.readlines()
    while True:
        card_name = input('What card would you like to remove? ')
        if card_name == 'save':
            with open('./scryfall-deck-modified.txt', 'w') as f:
                f.writelines(arr)
        elif card_name == 'exit':
            sys.exit()
        else:
            try:
                card_name = card_name.title()
                if not card_name.split()[0].isdigit():
                    card_name = "1 " + card_name
                print(card_name)
                card_name += '\n'
                arr.append(card_name)
            except:
                print("\t\tError")
