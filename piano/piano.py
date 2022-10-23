from tkinter import *
from winsound import SND_FILENAME, SND_ASYNC, PlaySound
import keyboard
from threading import *

root = Tk()



keyboard.add_hotkey('a', lambda: Thread(target=PlaySound,  args=('piano keys//A2.wav', SND_FILENAME | SND_ASYNC)).start())

keyboard.add_hotkey('2', lambda: Thread(target=PlaySound, args=('piano keys//A#2.wav', SND_FILENAME | SND_ASYNC)).start())

keyboard.add_hotkey('b', lambda: Thread(target=PlaySound, args=('piano keys//B2.wav', SND_FILENAME | SND_ASYNC)).start())

keyboard.add_hotkey('c', lambda: Thread(target=PlaySound, args=('piano keys//C3.wav', SND_FILENAME | SND_ASYNC)).start())

keyboard.add_hotkey('5', lambda: Thread(target=PlaySound, args=('piano keys//C#3.wav', SND_FILENAME | SND_ASYNC)).start())

keyboard.add_hotkey('d', lambda: Thread(target=PlaySound, args=('piano keys//D3.wav', SND_FILENAME | SND_ASYNC)).start())

keyboard.add_hotkey('4', lambda: Thread(target=PlaySound, args=('piano keys//D#3.wav', SND_FILENAME | SND_ASYNC)).start())

keyboard.add_hotkey('e', lambda: Thread(target=PlaySound, args=('piano keys//E3.wav', SND_FILENAME | SND_ASYNC)).start())

keyboard.add_hotkey('f', lambda: Thread(target=PlaySound, args=('piano keys//F3.wav', SND_FILENAME | SND_ASYNC)).start())

keyboard.add_hotkey('6', lambda: Thread(target=PlaySound, args=('piano keys//F#3.wav', SND_FILENAME | SND_ASYNC)).start())

keyboard.add_hotkey('g', lambda: Thread(target=PlaySound, args=('piano keys//G3.wav', SND_FILENAME | SND_ASYNC)).start())

keyboard.add_hotkey('7', lambda: Thread(target=PlaySound, args=('piano keys//G#3.wav', SND_FILENAME | SND_ASYNC)).start())

keyboard.add_hotkey('-+a', lambda: Thread(target=PlaySound, args=('piano keys//A3.wav', SND_FILENAME | SND_ASYNC)).start())

keyboard.add_hotkey('-+2', lambda: Thread(target=PlaySound, args=('piano keys//A#3.wav', SND_FILENAME | SND_ASYNC)).start())






root.mainloop()