/*
⣿⡿⣭⡛⣿⣧⣼⣧⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⢻⣿⣿⣻⣿⣿⣿⣾⠿⡿⠛⠿⠿⣿⠛⢻⣿⣿⣿⣿⣿⣿⣿⡦⣷⣾⣧⣿⣿⣿⣿⣿⣿⣾⣿⣿⣷⣆⢸⣿⣿⣿⣿⠐⠀⣾⡆⣿⡟⠘⣻⣿⣿⣿⡿⠟⠉⢹⣿⡀⠙⢛⣛⠀⣄⠿⣿⣿⡧⢸⣷⠀⠲⢈⣧⠰⠄⢴⠄⠁⢀⣿⣆⣶⠀⣂⠀⢁⡇⢠⡴⣤⠄⠀⣙⠁⣿⣿⣏⣿⣾⠇⠀⠀⣀⠀⠘⢿⣷⢶⣧⠀⠈⠀⠀⠐⠚⢀⡚⠀⠋⠀⣻⣏⠁⣿⣗⠋⠀⣴⡾⡇
⣯⣽⣿⣿⣿⣿⣏⣿⣿⢿⣿⣟⢹⣿⣿⣿⣿⣿⣿⣿⣯⣿⣿⡇⠉⡛⣠⣄⣀⠀⠀⢀⠀⠀⠶⠆⠙⣻⣿⣿⠛⢃⣽⣿⡿⢝⣿⣿⣿⣿⣿⣿⣿⡏⢿⢛⣧⠿⣿⣩⣵⡆⣿⣷⡆⠈⣱⣿⡟⣿⣿⣿⠀⠀⠘⠟⣉⣿⣔⣼⣿⣧⣀⣴⠄⠈⠁⢸⣿⠦⢷⡄⠙⡷⠐⢀⣤⡄⢈⠱⡾⢋⡛⠋⠀⣼⣷⣼⣧⢿⣤⠀⢉⣀⡈⠁⠙⣿⣭⣦⡀⠀⣤⣤⡠⠎⡙⠿⣿⠀⣠⡀⠀⠀⠀⠀⣁⠀⢃⡀⠀⠀⡄⢼⣿⣴⣿⢿⠶⠀
⣽⣿⣷⣷⣿⣿⣿⣏⢽⣯⡿⣿⣿⣹⣾⣿⣿⣿⣿⣿⣿⣿⣿⡟⡿⢷⠻⣿⠻⣿⡆⢻⡷⠶⠾⢧⣿⢎⣽⣿⠲⠿⣿⡿⡿⠿⣿⣿⣿⣿⣿⣿⣿⣧⢼⣷⣾⢲⣿⣿⣿⣾⣿⣿⢀⣴⡾⣫⣁⡽⠛⠋⠛⠀⠀⣸⣾⢻⣇⡺⢿⣯⡟⠉⢣⣤⠀⣼⠁⢸⣿⡇⣠⡄⠂⠲⣮⣅⣈⡟⠀⠀⢀⡀⢣⣿⠉⠿⢿⣾⡏⢤⠜⠻⣇⠰⢦⠉⠉⠛⠹⠆⣹⠿⠒⠾⠃⢴⣏⣠⣿⠁⣰⡷⠀⠈⠁⢰⣯⣡⢸⣦⠿⢿⣿⣿⣏⣀⡄⠀
⣹⡟⣿⣿⣿⢿⣿⣎⣿⣿⣷⣿⣿⣯⢹⠿⣿⣿⣿⡟⣿⣿⣤⢻⣿⡿⣁⢈⠛⣟⠇⠸⠃⢰⣿⣿⣿⣿⣿⡿⣿⣛⢻⣿⣇⣀⣬⣩⡟⢻⣿⣿⣏⡹⣾⣿⣿⣾⣄⣟⣻⡿⣟⣧⣦⣿⣿⣿⣿⢿⣦⣄⡀⢀⣿⣿⣿⣿⣿⣿⢦⣿⣆⣶⣿⣿⣴⣦⢀⣀⣉⠁⠈⠀⢀⣾⣇⠘⣿⡧⠸⠟⠚⢧⣤⡂⠀⠀⠀⠛⠉⢴⠿⢢⣿⣃⣠⡿⠂⠀⢠⡾⠇⠘⣋⠀⣠⡞⢙⣿⠟⠘⢿⡿⢶⣷⠛⢈⣿⠇⢛⣛⣷⣿⠉⠻⣿⡏⢁⠀
⣮⣿⣯⣿⣟⣸⣿⣿⣿⣿⣿⣿⣟⣿⣶⣿⢿⣭⣿⣿⣿⣿⡍⠙⢿⣧⣸⣿⣿⣿⣿⡄⢴⠜⢋⣼⣿⡿⠋⠁⢸⣿⡿⢳⣹⣿⡧⣮⣾⣿⣿⣿⣩⢳⢻⡟⠋⠰⣿⣿⣿⣿⣿⣿⡿⣿⣿⠛⠁⠀⠹⣿⣷⣿⣿⣿⡿⠿⠋⡀⢸⣿⣿⣿⣿⠻⠛⠁⠈⠛⢩⣶⣦⠀⠘⢻⣏⢠⣦⡄⠀⠀⠀⡾⠛⢷⣶⠗⠺⠿⣷⣤⣀⣤⠉⢹⡿⠀⠀⠰⣿⠃⠰⣿⣿⣤⣿⣷⣿⣿⡧⣴⣤⣄⠀⠀⢠⣾⡟⢀⣿⣿⣿⣿⣿⡆⠈⠁⣹⡀
⣿⣷⣿⡭⣽⣿⣿⣿⣿⣿⣽⣿⣿⡿⢿⢻⣿⣿⣿⣿⣿⣿⡿⠂⢺⣿⣿⣿⣿⡿⣿⠧⠀⠰⢫⡿⢻⣿⡇⣘⡛⢩⣶⣿⡟⡛⣳⣾⣿⣿⣿⣿⣿⢜⣦⠝⠻⠛⠻⣧⣿⣿⣿⣿⣿⣿⢇⣿⡆⠀⣸⣿⣿⣿⣿⣿⣷⣦⠈⢻⣿⣟⣿⣿⣿⣷⡆⠸⠟⠀⠈⢹⣿⣇⠀⠘⣻⠄⠀⣿⣷⡂⠀⠹⣶⠘⠛⣷⠄⠀⢻⣿⣟⣿⣶⣿⣡⣧⠀⠀⠡⠾⢷⣻⣠⣿⣿⡟⠛⠁⣠⡄⠈⣿⣿⣆⣈⠛⡿⡟⣿⣿⣿⣿⣿⣷⣦⢴⢿⣟
⣿⣿⡛⡿⣿⣿⣿⢿⣿⢿⣿⣿⣿⢷⣿⢿⣿⣿⣿⣿⡿⡿⢁⣠⣿⣿⣿⣿⣿⠿⠟⢠⣼⣿⣿⣱⣟⡛⣷⣿⠁⠼⡇⠈⠠⠀⡝⣿⣿⣿⣿⣿⣿⣿⣿⣾⠇⠀⢐⠻⣿⣿⣿⣿⣿⠈⢿⣿⠏⢰⣿⣧⣿⣿⣿⣋⠻⣿⣤⢾⣿⣿⡿⠿⢿⣿⡟⡀⢀⠀⣤⣼⠛⢻⡶⠇⠙⠀⠀⠀⣿⣿⡀⢰⡿⠘⢧⠀⠀⣀⣸⣿⣿⣿⣤⣼⠛⣿⠻⠀⠀⢻⣿⣿⣦⣿⣿⢧⣤⠈⠙⠋⠀⢸⣿⣿⣄⣸⣿⣿⡻⣿⣿⣿⣿⣿⣏⣠⣬⢠
⣿⡿⣿⣷⣿⣾⣯⣿⣿⣶⣿⣿⣛⣤⣿⣾⣿⣏⣿⣿⣷⡦⣟⢛⣽⣿⡟⠿⡿⢉⡄⠸⢿⣿⣯⣿⠿⣿⣿⣄⣴⡖⣑⠟⠀⠾⣿⣿⣿⣷⣿⣹⣿⣃⠾⠿⢈⣠⢾⣿⣿⡏⠹⣿⣷⣶⡒⠁⢰⣿⣿⣿⣿⣛⡻⡿⣿⣿⣯⢈⡠⠏⣷⣶⣾⣿⣿⠏⠉⠀⣿⣿⡟⠋⠳⠂⣴⡄⣰⣶⡟⢉⣿⡏⠀⠘⡿⠘⠃⣻⣿⣷⢸⣿⣿⣿⠌⣹⡷⣠⡆⠘⣿⣿⠋⣉⣁⣈⠻⣶⣦⡀⣰⣾⣿⣹⣿⣳⠄⠘⣿⣿⣿⣿⣿⣿⣿⣿⢿⣿
⣿⣿⣿⣿⣿⣿⣯⣽⣿⣿⣿⣿⣿⠿⣿⣿⣿⡿⣿⣷⣾⣷⣤⡟⠿⡿⢯⣤⣾⣿⣿⣷⣴⠿⠛⣧⣄⡘⠿⢿⣿⣷⡿⠃⠠⢾⣩⣿⣿⣿⣿⣿⣿⣿⣷⣺⣿⣿⡀⠻⢿⣿⣶⣌⣹⢿⣯⣿⣄⣛⣿⣏⠿⣿⠷⠷⠸⢿⣷⠿⢷⣀⣼⣿⡿⣿⣿⣰⣿⠉⠉⠽⠗⣠⣾⣿⣿⡇⡿⣿⣿⠀⠙⣣⣤⣤⣶⣿⣄⢛⣿⣿⣟⣻⣿⣿⣾⣿⣿⣿⠟⢀⣸⣄⠈⢿⡿⠿⣷⡇⣀⣤⣿⢿⣿⠃⣹⣧⣼⣇⡿⣿⣿⣿⣿⠟⠻⣿⣖⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⡷⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣟⣛⣶⣦⣶⡿⢿⣿⢫⡄⢨⣿⡂⠀⣩⣿⠟⣷⡞⠛⢰⣶⡶⢃⢡⣿⣷⣿⣿⣿⣿⣿⢳⣿⣟⣛⠻⠡⣦⣿⡿⠁⠙⣿⣅⣴⡿⠛⣿⡇⠹⠀⠀⠀⠀⠁⢾⣿⣿⢶⣿⣾⣿⣿⣷⣾⣷⣾⡇⠀⢠⣾⣿⡟⠋⠷⠀⠀⠘⠋⣴⣿⣿⡿⠻⣿⡟⠉⢸⠿⡷⠛⠛⠛⠛⠛⢿⣿⣿⠃⠈⠻⠋⠀⣠⣶⠀⠛⣯⡉⠁⠀⠚⢛⣿⣿⣿⡿⠿⣿⣿⡏⢸⣿⣷⢊⣿⡍⣿
⣿⣿⣿⣿⣿⣿⣭⣵⣾⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢿⠿⣾⣿⣷⣿⣿⣻⣿⣿⣟⠛⠻⠿⠆⠀⠙⠟⠀⠰⠏⣱⣦⡄⣾⣿⣿⣿⣿⣿⣧⡞⣯⣝⣿⡇⠆⠀⢠⣥⠀⠀⠉⢹⣿⠀⠀⢿⣧⣶⡦⠀⠀⢠⣾⡧⠀⠀⠀⠉⠁⠀⠀⠸⣿⣿⡟⠀⣤⣮⣀⣀⣄⡀⠀⠀⠀⠀⣼⠿⠟⠋⠱⠄⠘⠃⠐⠶⣷⣷⠆⠀⠀⢠⣤⣾⣿⠋⠀⠀⠀⠀⠀⠛⠛⠚⠛⠻⡟⠂⠈⢠⣿⡿⢿⡉⣿⣦⣙⣻⣷⣘⠟⣿⣿⠿⡉⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣏⣿⣿⣿⣿⡿⣿⣿⣿⣿⣿⣹⣯⣾⣿⢿⣿⣿⣿⣿⣿⣿⣶⡦⢾⣶⠀⡀⣻⣴⣦⣤⡿⣿⡏⠈⡟⡿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡀⠀⢈⢿⠇⠀⠀⢀⡈⠀⣀⡘⠋⠀⠀⠀⢰⣾⠻⠀⣈⠁⠀⠀⢸⣦⣄⣀⣚⣿⣇⢸⣿⠛⣿⣿⣏⠱⢆⠀⢠⣶⣟⣢⣤⡄⠀⠀⠀⠀⠀⠀⠀⣤⡄⠀⢀⡸⠏⠁⠀⡀⠀⢷⣄⣀⠁⢠⣆⣀⣀⠸⣿⠉⣰⣿⣻⣤⣶⣯⠊⠀⣯⣼⣿⣿⣷⣿⣄⣤⣾⢙
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢭⣋⣿⣿⡟⣷⣿⡷⣾⢋⣤⣿⣹⣿⡟⣛⣳⣿⣷⣤⣿⢷⡈⣭⣿⣭⣿⣿⣿⣿⣿⡇⢰⣿⠿⣴⣿⣆⡸⠏⣼⣿⡿⣿⣿⣿⣷⣿⣿⣐⡿⣁⣴⣶⠄⢸⣿⡿⢿⠃⣿⣿⣇⣠⣶⡿⠍⣽⣶⣿⡆⢼⡏⢸⡿⢯⣤⣶⡶⠀⣿⣶⣶⠄⣿⡇⠀⣿⠟⣿⣿⡿⠋⠁⣿⣿⠿⣧⣴⣿⢛⡛⣻⣿⣿⣽⡏⠺⣿⣿⡶⣿⡖⣴⡏⣿⡿⢂⣿⣿⣿⣿⣿
⣿⣿⣿⣿⡏⣿⣷⣾⣿⣿⢟⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡌⣁⣿⣿⠛⠛⠛⢳⡿⠛⠛⠛⠚⣶⠟⠛⠋⠁⢄⠙⠛⢋⢂⠛⢋⣉⢹⣿⣿⣿⠟⠒⠃⠁⠈⡟⢛⠛⠛⢄⠈⠛⠃⠙⠻⣿⠛⠛⣿⡎⠀⢻⠛⠛⠂⠚⣟⠁⠛⠒⠈⢩⢽⣿⡯⠃⠀⠘⠓⢸⠧⠛⠛⠂⠀⡘⠛⢓⡒⢆⢉⠁⢸⡆⢛⡛⠛⢤⠀⠙⠛⠛⠀⡀⠈⢰⣿⠇⣁⣾⣿⣿⣿⣿⠿⠛⣫⣬⣿⣿⣿⡛⣿⣿⣁⣿⣿⣶⣿⣿⣿⣿⣟
⣿⣿⣿⣿⡟⠛⣿⣟⠹⣿⣾⣿⣿⣿⣿⣿⣿⣿⣽⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⡶⡇⠀⣇⠰⢶⣦⣤⡟⠀⣴⠦⠀⠈⡦⠀⠀⢫⠀⢸⡉⣠⡉⠉⠻⡄⠰⢒⡤⠼⠇⢸⣿⠀⠀⡇⢀⣶⡄⠀⢸⡄⢀⠈⡄⠀⣼⠀⢰⡖⠠⠇⡀⠈⠉⢹⢩⣤⣽⢃⠀⠶⣦⣤⣿⠀⢸⠋⣀⣀⡇⠀⢸⣩⠀⣿⠀⢸⡇⢸⡃⠀⠀⡤⠄⠀⡤⠤⢁⣴⣿⣿⣷⣿⣿⡿⠈⠿⣷⣶⣷⣾⣯⣿⣿⣿⣧⠷⣿⡍⢿⣿⣿⣿⣿⣿⡿⣿
⣿⡿⣿⢹⣗⣾⣶⣿⣶⣿⣿⣿⣻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠛⠛⣿⡇⠀⣿⣓⣤⡈⠙⡇⠀⣏⣀⠀⠀⡇⠀⣧⠀⠀⢸⡉⠁⠸⠇⢠⣍⣲⣤⡀⠢⡀⠸⠾⠀⢀⡇⢸⣿⣁⠀⢸⠇⢸⡄⠀⠀⡏⠀⢸⡇⠉⢱⡇⠀⢟⣻⣶⣦⣭⣿⠗⠤⣈⠙⢿⠀⢸⣸⣿⣿⡇⢀⡈⠀⢸⣉⠀⠸⡇⠸⠇⠀⢀⡇⡄⠀⡅⣒⡒⢻⣿⣏⣿⣿⡻⣧⣨⣷⣶⣾⣿⡿⣿⣿⢿⣿⣿⣴⣿⣶⣿⣿⣹⣿⣿⣿⣿⣯
⣿⣷⣿⣿⣿⣿⣿⣻⣿⣿⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡀⠀⠙⠁⠀⡇⠀⢀⣀⣠⣷⡀⠙⠛⢀⣠⡇⠀⣿⣆⠀⣸⣧⠀⠀⠀⠀⠀⠀⢀⣀⣠⡇⠀⢰⣶⣿⣇⠈⠛⠃⣀⡼⠀⢸⡆⡀⢀⣇⣀⡈⠛⠀⠀⡇⠀⠀⠀⢸⣿⣃⡀⠀⠀⣀⣀⣼⣄⣈⠋⠀⠀⣇⣸⠟⠀⠀⣿⠀⠀⡇⠀⢰⣊⣿⣿⢃⣀⣧⣿⣿⣨⣭⣿⣿⣿⣿⣊⢻⣷⣿⣿⣿⣿⣯⣰⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣻
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣽⣿⣿⣿⣿⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⣿⣿⣿⣮⣼⣿⣿⡿⣿⣟⣿⣦⣾⣿⣿⣿⠛⡻⣿⣿⣾⢿⣷⡏⢙⠡⢚⢛⣒⣂⣈⢫⢥⣷⠤⠐⢉⣿⣿⠈⣽⣿⣏⠉⢉⠁⠶⠾⠯⠈⠿⣿⠁⢠⢸⣿⣿⠙⣿⣿⡩⠭⠁⠿⢿⡛⢿⣿⣿⣿⣿⣿⣿⡟⣫⣽⣙⣿⣿⣿⣿⣿⠿⠛⣿⣿⠿⣿⣿⣞⠉⠛⣿⣿⡟⢿⢛⣿⣷⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠿⣿⣏⣿⣿⣿⣿⣿⣿⣹⢧⣼⣷⢹
⣿⣿⣿⡿⣿⣿⣿⣿⣾⣿⣛⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⣿⣿⣿⣿⠟⢛⣻⣿⡅⠀⠨⣿⣿⠉⣽⣿⣿⡁⢀⣿⡿⢟⢰⣿⣻⣋⠀⣟⡛⠿⡁⠀⠀⠰⣷⢶⣶⣤⣬⣁⡀⢙⣿⣟⡿⣿⠃⢺⡿⣿⣷⣾⣟⡁⠀⠈⢛⣟⡆⢠⣷⣤⡄⢀⠀⢻⣇⠀⠹⣿⣿⠿⣻⣿⣟⣿⣿⣿⠋⠛⣯⣶⣿⠃⠀⠉⢿⣗⠂⣩⣯⡅⡄⣙⡛⠁⠀⠘⣿⡿⠟⠀⣺⣭⣽⣯⣵⣼⣛⣻⣳⣿⣿⣿⣾⣿⣍⣛⣻⣏⣷⡾⣿⠮⣸
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣿⣿⣯⠉⠳⢙⣿⣿⣿⣾⣧⣤⠁⠀⠛⢿⠟⣿⣿⣿⣷⣈⣰⣿⣿⣏⣙⣛⣻⡿⢯⣤⣀⣰⣶⣺⡧⡿⣿⣿⣋⣁⢾⣿⣿⣗⣶⣿⣯⣿⣼⣿⣿⡇⢀⣿⣨⣿⣤⣤⠉⣛⣋⡙⠦⣽⣿⡿⢷⣿⣦⣤⠀⠛⣿⢛⣿⣯⣴⡆⠘⢿⣿⡇⠀⠂⣹⣿⣄⣩⡙⠿⠛⠟⣹⣦⣦⢆⠰⣶⣿⢷⣎⣿⣾⣿⣿⢿⣿⣿⣿⢾⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⣶⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣗⣁⣸⣿⣿⣟⣿⣿⡿⣦⣴⣤⣿⣦⣽⣽⣿⣿⣿⠁⠹⠃⢀⣼⣷⣿⠿⠝⠿⣿⣿⣛⡟⣧⣿⣿⡿⣿⠿⠟⠿⠿⣿⣿⣿⡏⢉⣾⣿⣿⣷⣾⠉⠉⠉⠙⠻⣿⣿⣿⣷⠀⠪⠍⣶⣾⣿⣿⣿⣄⡐⢶⣼⠿⣿⣿⣿⠹⣾⡟⠁⠰⠣⢻⣵⣟⢻⣿⣿⣶⡀⢝⣟⣿⣿⣿⣿⣿⣧⣛⣉⣿⣿⣿⣿⣿⣿⣿⣿⡏⢙⣿⣟⣿⠇⣾⣿⢿⣿⣟⣧⢺
⣿⡿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣽⣿⣿⢋⡿⢿⣿⣿⡽⢛⣽⣿⣿⣿⣦⣶⣭⣼⣿⡏⠁⠀⠀⠀⢀⠈⠛⠐⢻⣿⠛⠛⠋⠀⠄⢀⣢⣿⣧⣘⠃⠤⣽⠿⢿⣿⣿⣀⡀⣰⣴⣤⣄⢉⡙⠻⢀⠀⠂⣽⣿⡛⠛⠛⠿⠿⢰⣿⢋⣾⣿⣿⣌⣡⡀⣀⣀⣦⣾⣿⣿⣾⣫⣿⣿⣿⣦⣷⣿⣿⣿⣿⣟⢿⣽⣿⣿⣿⣿⣿⣿⣭⠿⣿⠛⣻⣯⣹⡿⣾⣿⣯⣼⣿⢛⣿⣴
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢿⣾⣷⣳⣶⣿⣇⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⣾⣷⣧⣦⣀⣀⠀⠁⠈⣿⣿⣷⣴⣆⣶⠀⡠⣿⣿⣿⢷⡆⠰⣦⢀⡀⠚⠛⢻⣿⣷⣿⣿⣿⣿⣷⡤⠂⠸⠿⢿⣿⣷⣶⣦⣤⠀⣷⣦⣩⣩⣿⣽⣿⣟⠛⢻⣷⣿⣯⣉⣾⣿⡿⢉⢹⡽⣿⣏⣹⣿⣿⣿⣿⣿⣿⡿⢡⢛⣯⣿⣿⣿⣿⣶⣏⣿⣿⣣⣼⣿⣿⣿⣿⣼⣿⣿
⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡏⣹⣿⣿⣻⣿⣿⣿⣦⣿⣿⣿⣿⣿⣿⢿⣿⣷⣿⣿⣮⣥⣈⣻⣿⣇⣶⣻⣿⣿⣿⣿⣿⣾⣿⣿⣿⡧⢸⣑⢀⣷⣿⣿⣾⡆⡻⢿⡿⣿⣿⣟⣿⣯⡀⠀⢰⣷⣾⣿⣽⣿⠏⣤⠀⣦⣥⣿⢻⣿⡿⣿⣿⣷⣾⣿⣿⣿⣿⣿⣿⡷⢠⣌⣑⣿⣿⣿⣿⣿⣿⣿⣿⣿⣾⡉⣿⣿⣯⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣯⣿⣿⣽⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣯⣽⣿⣾⣯⡿⢿⣿⣿⣿⣿⡿⢿⣿⣿⣾⣿⣿⢸⣿⣿⣿⣿⣿⣿⣿⣿⣧⢿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣿⣯⣼⣿⣿⣿⣿⣧⣴⣸⣿⣿⣿⣿⠿⡿⢿⡰⣼⣿⡿⠛⣻⣿⣾⣿⣦⣽⣿⣿⣿⣿⣾⣿⣿⣿⣿⣿⣿⣿⣿⣯⣿⣿⡏⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⣿⣿⣿⣯⣿⣿⣟⣿⣻⣿⣿⣿⣛⣷⢻⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⣿⣩⣿⣷⣿⣿⣿⣿⣿⣿⣾⣿⡟⢴⣿⣿⣀⣻⣿⣿⢻⣿⣿⣿⣿⣿⣾⣿⣿⣿⠉⣿⣿⣿⣿⣿⣼⣿⣿⣿⣯⣿⣿⣿⣿⣿⣿⣿⣿⣤⠻⣿⣿⣷⣽⣿⡿⢷⣿⣿⠉⢸⣿⠛⢸⣿⣯⣿⣿⠟⠡⣿⣿⣿⣿⣽⠟⢙⣿⣿⡃⢿⣿⣟⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣾⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣭⣿⣿⣿⣿⣿⣿⣿⣿⣿⣛⣯⣭⣿⣿⣿⣿⣿⣏⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣾⣿⣿⣥⣿⣿⣿⣿⣻⣿⣶⣿⣿⣿⣿⣿⣿⣿⣻⣿⣷⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣾⣿⣿⣶⣶⣾⣷⣾⣿⣿⣿⣷⣿⣷⣿⣿⣯⣿⣿⣶⣾⣿⣿⣷⣿⣿⣽⣽⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣿⣿⣿⣿⣿⣿⣿⣾⣿⡟⣯⣿⣿⣿⣿⣿⠿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢧⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣟⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣭⣹⣿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣽⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣯⣿⡿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣾⣿⣯⣿⣿⣿⣏⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠻⠿⣿⣿⣴
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣯⣽⣿⣿⣿⣿⣿⣿⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣿⣿⣿⣿⣿⣿⣿⣿⣿⢿⣿⡿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢿⣿⣿⣿⣿⣿⣿⣿⠟⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣱⣿⣿⣿⣿⣿⠟⣿⣿⣷⣿⣿⣿⣿⣿⣿⣿⣿⣾⣿⣿⣿⣿⣽⣽⣇⢀⠀⢩⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢶⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡃⣿⣿⣿⣿⣿⣿⣿⡿⢿⣿⣿⣿⣿⣿⣿⣿⣻⠿⠙⢿⣿⣿⣿⣿⣿⡿⢿⣿⣿⣿⣿⣿⣿⣿⣾⣿⣿⠋⣻⣿⣿⣿⣿⣿⣿⣿⣿⡿⢿⣿⣟⣽⣿⣿⣿⣿⣿⣿⣯⣿⣿⣽⣿⣧⣾⣿⣿⡏⢹⣿⣿⣿⣿⢿⣿⣿⣿⣿⣿⣧⡙⢿⣿⣿⣟⣲⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠛⠛⣭⣬⣿⣿⣿⡣⣤⣼⣿⣟
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣛⡿⡿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣯⣿⣿⣿⣿⣿⣿⣿⡿⣿⣿⣿⣿⣭⣿⣿⣿⣿⣿⣿⣷⣌⣿⣿⣿⣿⣿⣛⢘⣿⣿⣿⣿⣿⣿⣿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⣿⣿⣛⣻⣷⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠻⣿⣿⣿⣿⣿⣿⣯⣻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣾⣿⣿⣿⣿⣿⣿⣍⣿⣿⣿⣿⣿⣿⣿⣿⣽⣯⡅⣴⣾⣿⣽⣿⣏⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣟⣿⣿⣿⣿⣿⣿⣿⣷⣷⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⣿⣿⣿⣿⣿⣿⣽⣿⡿⣿⣿⣿⣿⣿⣷⣿⡿⣿⣿⣿⣿⡏⣽⡏⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⢉⣿⣿⣿⣿⣿⣿⣿⣯⣽⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⡏⢿⣿⣯⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡛⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠛⣉⣿⣽⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢿⣿⣿⡟⠛⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⡆⣽⣶⣮⣽⣿⣿⣿⣿⣿⣿⠗⢨⣿⣿⣿⣿⣧⢸⣶⣿⣿⣿⣿⣿⡞⣧⣿⣿⣿⣿⡿⣿⣿⣿⢿⣿⣿⣧⣽⣿⣿⣿⣿⣷⡉⢫⣯⣭⡍⢻⡸⣿⣿⣿⡿⠻⢏⣿⡁⢸⣿⣿⣿⣷⣿⣿⣿⣿⣞⣙⢿⣿⣻⣿⣿⣿⣿⣿⣿⡏⣹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢿⣿⣿⣿⣾⣿⠟⣿⣿⣿⡛⢻⢼⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢿⣿⣿⣿⣿⣿⡿⣶⢲⣼⡿⢿⣿⣿⣿⣿⣿⣟⣿⣿⣿⣿⣿⣯⣽⣿⣿⣯⣹⣿⣿⣿⣟⣷⣠⣿⡷⣾⢷⣾⣿⣿⣟⣹⣾⣿⣹⣿⠧⢞⡿⣿⣿⣿⣿⡿⣿⣟⣫⣟⣷⢿⡿⣿⣿⣿⣿⣿⣿⢻⣧⣰⣷⣿⣷⣶⣄⢿⣟⣿⣠⣶⢸⣟⣱⠾⣿⣿⣻⣿⣛⣿⣿⡏⢿⣿⣿⡿⣿⣯⣿⣿⣿⣿⣿⣷⣾⣟⣿⣿⡿⣿⣿⣿⣿⣿⣿⣿⡟⣿⣿⣿⡟⣿⣰⣿⣿⣟⣻⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣟⢿⣷⣾⣿⣿⡿⢿⣿⡗⣾⣾⣿⣿⠟⠹⣿⣿⡏⣿⣿⢿⣿⣏⣻⣿⣿⣶⣿⣿⣯⣿⣿⣮⣿⣿⡟⣿⣿⠸⣿⣾⣿⢿⣿⡿⣏⣿⡿⣿⣿⣷⡿⣧⣭⣼⣿⡿⢿⣿⣇⣿⣮⠿⣿⣷⣿⠟⣿⣿⣿⣶⣾⡏⣽⠿⣿⣿⡿⣾⣿⣿⣿⣽⣿⣾⣿⣿⣿⣿⣿⣿⣿⣏⠁⣛⣡⣾⣿⡏⣵⣿⣿⣿⠈⠉⠻⣭⠿⣿⣿⢿⣿⣿⣿⣿⣿⣿⣿⣿⠿⣿⣼⣿⣿⣷⣿⢿⣿⣿⣿⣿⣿⣿⡿⠟

*/
      import * as THREE from "three";
      import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
      import RAPIER from "https://cdn.jsdelivr.net/npm/@dimforge/rapier3d-compat@0.14.0/+esm";

      const $ = (id) => document.getElementById(id);
      const status = (message) => ($("status").textContent = message);

      let scene, camera, renderer, loader, world;
      let characters = new Map();
      let npcs = [];
      let cars = [];
      let mapObject = null;
      let activeMode = "ai";
      let clock = new THREE.Clock();
      let cameraTarget = null;
      let isPlayingJSON = false;
      const cameraLookOffset = new THREE.Vector3(0, 1.5, 0);
      const cameraFollowOffset = new THREE.Vector3(10, 10.2, 3);
      const cameraLookMatrix = new THREE.Matrix4();
      const cameraTargetQuaternion = new THREE.Quaternion();

      const raycaster = new THREE.Raycaster();
      const keys = {};

      async function init() {
        await RAPIER.init();

        scene = new THREE.Scene();
        scene.background = new THREE.Color(0x9bc9ed);
        scene.fog = new THREE.Fog(0x9bc9ed, 60, 1800);

        camera = new THREE.PerspectiveCamera(
          70,
          innerWidth / innerHeight,
          0.1,
          500,
        );
        camera.position.set(0, 5, 12);

        renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(innerWidth, innerHeight);
        renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
        renderer.shadowMap.enabled = true;
        $("game").appendChild(renderer.domElement);

        scene.add(new THREE.HemisphereLight(0xffffff, 0x777766, 2));

        const sun = new THREE.DirectionalLight(0xffffff, 2);
        sun.position.set(20, 40, 10);
        sun.castShadow = true;
        scene.add(sun);

        const ground = new THREE.Mesh(
          new THREE.PlaneGeometry(2000, 2000),
          new THREE.MeshStandardMaterial({
            color: 0x47964b,
            transparent: true,
            opacity: 0,
            depthWrite: false,
          }),
        );
        ground.rotation.x = -Math.PI / 2;
        ground.receiveShadow = true;
        scene.add(ground);
        world = new RAPIER.World({ x: 0, y: -9.81, z: 0 });
        const groundBody = world.createRigidBody(RAPIER.RigidBodyDesc.fixed());
        groundBody.setTranslation({ x: 0, y: -0.1, z: 0 }, true);
        world.createCollider(
          RAPIER.ColliderDesc.cuboid(250, 0.1, 250),
          groundBody,
        );

        loader = new GLTFLoader();

        window.addEventListener("resize", resize);
        window.addEventListener(
          "keydown",
          (e) => (keys[e.key.toLowerCase()] = true),
        );
        window.addEventListener(
          "keyup",
          (e) => (keys[e.key.toLowerCase()] = false),
        );

        renderer.domElement.addEventListener("click", () => {
          if (
            !$("panel").contains(document.activeElement) &&
            !$("chat").contains(document.activeElement)
          ) {
            renderer.domElement.requestPointerLock?.();
          }
        });

        animate();
        status("3D scene ready.");
      }

      function resize() {
        camera.aspect = innerWidth / innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(innerWidth, innerHeight);
      }

      function loadGLB(url) {
        return new Promise((resolve, reject) => {
          if (!url) return reject(new Error("Missing GLB URL."));
          loader.load(
            url,
            (gltf) => {
              const object = gltf.scene;
              object.traverse((child) => {
                if (child.isMesh) {
                  child.castShadow = true;
                  child.receiveShadow = true;
                }
              });
              resolve(object);
            },
            undefined,
            (error) => {
              const reason = error?.message || "The file could not be read.";
              reject(
                new Error(
                  `Could not load 3D model "${url}". Check that the URL serves a complete GLB file. ${reason}`,
                ),
              );
            },
          );
        });
      }

      function randomPosition(range = 15) {
        return new THREE.Vector3(
          (Math.random() - 0.5) * range * 2,
          0,
          (Math.random() - 0.5) * range * 2,
        );
      }

      function addNameTag(object, name) {
        const canvas = document.createElement("canvas");
        canvas.width = 512;
        canvas.height = 100;
        const ctx = canvas.getContext("2d");
        ctx.fillStyle = "rgba(20,15,30,.8)";
        ctx.fillRect(0, 0, 512, 100);
        ctx.fillStyle = "white";
        ctx.font = "bold 42px Arial";
        ctx.textAlign = "center";
        ctx.fillText(name, 256, 65);
        const texture = new THREE.CanvasTexture(canvas);
        const sprite = new THREE.Sprite(
          new THREE.SpriteMaterial({ map: texture, transparent: true }),
        );
        sprite.scale.set(3, 0.6, 1);
        sprite.position.y = 10;
        object.add(sprite);
      }

      async function createCharacter(data) {
        const name = data.name || "Character";
        const model = data.model || data.glb;
        const object = await loadGLB(model);
        const pos = data.position || [0, 0, 0];
        object.position.set(pos[0], pos[1], pos[2]);
        object.scale.setScalar(data.scale || 1);
        object.userData.characterName = name;
        object.userData.fishaudio = data.fishaudio || "";
        object.userData.prompt = data.prompt || "You are a friendly character.";
        object.userData.ragdolled = false;
        object.userData.wander = false;

        scene.add(object);
        addNameTag(object, name);

        const body = world.createRigidBody(
          RAPIER.RigidBodyDesc.dynamic()
            .setTranslation(pos[0], pos[1] + 1, pos[2])
            .setCanSleep(false),
        );
        const collider = world.createCollider(
          RAPIER.ColliderDesc.capsule(0.65, 0.35).setMass(1),
          body,
        );

        const character = {
          name,
          object,
          body,
          collider,
          fishaudio: object.userData.fishaudio,
          prompt: object.userData.prompt,
        };
        characters.set(name, character);
        return character;
      }

      async function createNPCS(data) {
        const count = Math.min(500, Math.max(0, Number(data.count) || 1));
        const models = Array.isArray(data.models)
          ? data.models
          : Array.isArray(data.glbs)
            ? data.glbs
            : [];
        if (!models.length) throw new Error("createNPCS needs a models array.");
        if (
          models.some((model) => typeof model !== "string" || !model.trim())
        ) {
          throw new Error(
            "Every createNPCS model must be a non-empty GLB URL.",
          );
        }

        for (let i = 0; i < count; i++) {
          const model = models[Math.floor(Math.random() * models.length)];
          const position = randomPosition(data.rangePos || 15);
          const names = [
            "hi",
            "banana",
            "bonzi",
            "clocks",
            "bonzis",
            "clock",
            "➡️",
            "⬅️",
            "GRRRRRRRRRRR!!!",
            "!",
            "?",
            ".",
            ",",
            "😂",
            "😭",
            "what ya doing",
            "me jew",
            "NUKE",
            "bonziSKIDS",
            "😡",
            "😆",
            "😅",
            "behh",
            "ohohohohohohoh" /*"AH! I'm blowing like a Balloon!"*/,
            ,
            "fuck you",
            "pissers",
            "ass",
            "he",
            "him",
            "his",
            "she",
            "her",
            "hers",
            "aer",
            "ae",
            "aers",
            "family guy",
            "roblox",
            "minecraft",
            "skyboxer",
            "im a pancake",
            "broken microphone" /*"AH! I'm not feeling good"*/,
            ,
            "💀",
            "ts",
            "pmo",
            "in the big 26",
            "penisini",
            "whisper",
            "sideways",
            "through",
            "electric",
            "velvet",
            "pancakes",
            "fuuuuuu",
            "Fuc",
            `"'xccxc cxcc'"`,
            "bznzn",
            "schzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz",
            "SOMEONE STOLE THE FIRE FROM THE HOLE",
            "Nigs",
            "🚗",
            "🚙",
            "🚑",
            "marquee",
            "reinbow",
            "NYAN CAT",
            "me after",
            "AH! I'm having an stroke",
            "AH!",
            "Hell fucking yeah",
            "smfh",
            "asshole",
            "who cares",
            "FAMMMS",
            "Nigers",
            "Fufuu",
            "Dabba",
            "bworg",
            "mickai.me",
            "bonzi.gay",
            "bw rejunglified",
            "gwordps",
            "send",
            "how to vault codes?",
            "💩",
            "🐢",
            "clocked",
            "7727772162",
            "fuckckckkkkkkkkkk",
            "FufuFuFuFu",
            "pneumonoultramicroscopicsilicovolcanoconiosis",
            "i am",
            "he is",
            "fucc",
            "sugma dicc",
            "me when",
            "eating",
            "taco bell",
            "mcdonalds",
            "burger king",
            "kfc",
            "chipotle",
            "pizza hut",
            "dominos",
            "semjg mex",
            "ME AFTER EATING TACO BELL",
            "WHAT am i",
            "BUTT3R",
            "egg. CAN YOU STOP TURNING PEOPLE INTO- egg.",
            "fuck you",
            "uh uh balazo",
            "I like numberblocks.",
            "agent smith",
          ];
          const character = await createCharacter({
            name: `${names[Math.floor(Math.random() * names.length)]}`,
            model,
            position: [position.x, 0, position.z],
            scale: data.scale || 1,
          });
          character.object.userData.wander = data.wander !== false;
          character.object.userData.wanderTarget = randomPosition(
            data.rangePos || 15,
          );
          npcs.push(character);
        }
      }
      async function makeTitleCard(text) {
        //document.addEventListener("DOMContentLoaded", () => {
        const card = document.querySelector(".card");
        card.hidden = false;
        //card.classList.add('bright-end');
        card.animate(
          [
            { filter: "brightness(0)" }, // Start state
            { filter: "brightness(1)" }, // End state
          ],
          {
            duration: 1500, // Duration in milliseconds
            easing: "ease-out", // Timing function
            fill: "forwards", // Keeps the final brightness(1) state after finishing
          },
        );
        //card.image = `cards/sprite_${String(Math.floor(Math.random()*24)).padStart(3, '0')}.png`;
        const title = card.querySelector(".title");
        title.textContent = text;
        setTimeout(() => {
          card.animate(
            [
              { filter: "brightness(1)" }, // Start state
              { filter: "brightness(0)" }, // End state
            ],
            {
              duration: 1500, // Duration in milliseconds
              easing: "ease-out", // Timing function
              fill: "forwards", // Keeps the final brightness(1) state after finishing
            },
          );
          setTimeout(function () {
            card.hidden = true;
            document.querySelector("#game").hidden = false;
          }, 1500);
        }, 2000);
        //});
      }
      async function createTraffic(data) {
        const models = data.cars || [];
        if (!models.length)
          throw new Error("createTraffic needs a cars array.");

        const count = Math.min(100, Math.max(0, Number(data.count) || 1));
        const speed = Number(data.speed) || 5;
        const sounds = ["sound1", "sound2"];
        for (let i = 0; i < count; i++) {
          const model = models[Math.floor(Math.random() * models.length)];
          const car = await loadGLB(model);
          car.position.set(-50, 0, Math.random() * 15 - 15 / 2);
          car.rotation.y = 0;
          car.userData.speed = speed * (0.8 + Math.random() * 0.4);
          car.userData.startX = -50;
          car.userData.endX = 50;
          car.updateMatrixWorld(true);
          const carSize = new THREE.Box3()
            .setFromObject(car)
            .getSize(new THREE.Vector3());
          car.userData.hitRadius = Math.max(
            1.35,
            Math.max(carSize.x, carSize.z) * 0.5,
          );
          scene.add(car);
          cars.push(car);
          setTimeout(
            function () {
              new Audio(
                `./cars/${sounds[Math.floor(Math.random() * sounds.length)]}.mp3`,
              ).play();
            },
            Math.floor(Math.random() * 2000),
          );
        }
      }

      async function loadMap(url) {
        if (mapObject) scene.remove(mapObject);
        mapObject = await loadGLB(url);
        mapObject.position.set(0, 0, 0);
        scene.add(mapObject);
      }
      async function playYtAudio(url) {
        // 1. Dynamically create and append the container element
        const playerDiv = document.createElement("div");
        playerDiv.id = "yt-js-audio-player";
        document.body.appendChild(playerDiv);

        // 2. Load the YouTube IFrame Player API script
        const apiScript = document.createElement("script");
        apiScript.src = "https://youtube.com";
        document.head.appendChild(apiScript);

        let ytPlayer;

        // 3. Initialize the player once the API is ready
        window.onYouTubeIframeAPIReady = function () {
          ytPlayer = new YT.Player("yt-js-audio-player", {
            height: "200", // Must stay >= 200x200 to comply with YouTube TOS
            width: "200",
            videoId: url, // Replace with your YouTube Video ID
            playerVars: {
              autoplay: 1,
              mute: 1, // Starts muted to bypass browser autoplay blocks
            },
            events: {
              onReady: (event) => {
                event.target.playVideo();
              },
            },
          });
        };

        // 4. Unmute automatically on the first user interaction anywhere on the page
        ["click", "keydown", "touchstart"].forEach((evt) => {
          window.addEventListener(
            evt,
            () => {
              if (ytPlayer && typeof ytPlayer.unMute === "function") {
                ytPlayer.unMute();
                ytPlayer.setVolume(100);
              }
            },
            { once: true },
          );
        });
      }
/*async function setSize(character, sizenum){
  character.scale.setScalar(sizenum);
}*/
      async function sayAs(character, text) {
        const subtitle = $("subtitle");
        subtitle.textContent = `${character.name}: ${text}`;
        subtitle.style.display = "block";
        cameraTarget = character;

        try {
          if (character.fishaudio) {
            try {
              const response = await fetch("/api/fish", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  text,
                  fishaudio: character.fishaudio,
                }),
              });
              if (!response.ok) throw new Error("Fish Audio request failed.");
              const blob = await response.blob();
              const audioURL = URL.createObjectURL(blob);
              const audio = new Audio(audioURL);
              const playbackEnded = new Promise((resolve) => {
                audio.addEventListener("ended", resolve, { once: true });
                audio.addEventListener("error", resolve, { once: true });
              });
              try {
                await audio.play();
                await playbackEnded;
                return;
              } finally {
                URL.revokeObjectURL(audioURL);
              }
            } catch (error) {
              console.warn(error);
            }
          }

          if (window.speak) {
            const result = window.speak(text);
            if (result && typeof result.then === "function") {
              await result;
            } else {
              await new Promise((resolve) =>
                setTimeout(
                  resolve,
                  Math.max(1200, Math.min(8000, String(text).length * 55)),
                ),
              );
            }
          } else if ("speechSynthesis" in window) {
            await new Promise((resolve) => {
              const utterance = new SpeechSynthesisUtterance(text);
              utterance.onend = resolve;
              utterance.onerror = resolve;
              speechSynthesis.speak(utterance);
            });
          } else {
            await new Promise((resolve) =>
              setTimeout(
                resolve,
                Math.max(1200, Math.min(8000, String(text).length * 55)),
              ),
            );
          }
        } finally {
          subtitle.style.display = "none";
          subtitle.textContent = "";
          if (cameraTarget === character) cameraTarget = null;
        }
      }

      async function characterReply(name, message) {
        const character = characters.get(name);
        if (!character) throw new Error("Character not found: " + name);

        const response = await fetch("/api/character-ai", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: character.name,
            prompt: character.prompt,
            message,
          }),
        });
        const data = await response.json();
        if (!response.ok || !data.success)
          throw new Error(data.error || "Character AI failed.");
        await sayAs(character, data.text);
        return data.text;
      }

      async function executeCommand(command) {
        if (command.createCharacter) {
          await createCharacter(command.createCharacter);
          return;
        }

        if (command.createNPCS) {
          const raw = command.createNPCS;
          const data =
            raw && typeof raw === "object" && !Array.isArray(raw)
              ? { ...raw }
              : {};
          if (typeof raw === "number") data.count = raw;
          data.models =
            data.models ||
            data.glbs ||
            command.models ||
            command.randomGLBs ||
            command.randomGlbs;
          if (data.rangePos === undefined) data.rangePos = command.rangePos;
          if (data.wander === undefined)
            data.wander = command.wander ?? command.wanders;
          await createNPCS(data);
          return;
        }

        if (command.createTraffic) {
          await createTraffic(command.createTraffic);
          return;
        }

        if (command.map) {
          await loadMap(command.map);
          return;
        }

        if (command.title) {
          await makeTitleCard(command.title);
          return;
        }

        if (command.target && command.text) {
          const character = characters.get(command.target);
          if (!character)
            throw new Error("Unknown character: " + command.target);
          await sayAs(character, command.text);
          return;
        }

        if (command.wait) {
          await new Promise((resolve) =>
            setTimeout(resolve, Number(command.wait)),
          );
          return;
        }

        if (command.remove) {
          const character = characters.get(command.remove);
          if (character) {
            scene.remove(character.object);
            world.removeRigidBody(character.body);
            characters.delete(command.remove);
          }
          return;
        }

        console.warn("Unknown episode command:", command);
      }

      async function playEpisode(commands) {
        if (!Array.isArray(commands))
          throw new Error("Episode must be a JSON array.");

        for (const command of commands) {
          await executeCommand(command);
        }
      }

      async function generateAI() {
        const prompt = $("prompt").value.trim();
        if (!prompt) return alert("Write an episode prompt first.");

        status("Generating episode with Groq...");
        try {
          const response = await fetch("/api/ai", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ prompt }),
          });
          const data = await response.json();
          if (!response.ok || !data.success)
            throw new Error(data.error || "AI generation failed.");

          $("episodeJSON").value = JSON.stringify(data.episode, null, 2);
          $("jsonSection").style.display = "block";
          $("aiSection").style.display = "none";
          activeMode = "json";
          status("Episode generated. Press Play JSON.");
        } catch (error) {
          status(error.message);
        }
      }

      async function playJSON() {
        if (isPlayingJSON) return;
        isPlayingJSON = true;
        document.body.classList.add("json-playing");
        $("playJSON").disabled = true;
        try {
          const commands = JSON.parse($("episodeJSON").value);
          status("Playing episode...");
          await playEpisode(commands);
          status("Episode finished.");
        } catch (error) {
          status("Error: " + error.message);
        } finally {
          isPlayingJSON = false;
          document.body.classList.remove("json-playing");
          $("playJSON").disabled = false;
        }
      }

      function updateNPCs(delta) {
        for (const npc of npcs) {
          if (!npc.object.userData.wander || npc.object.userData.ragdolled)
            continue;
          if (npc.object.userData.knockbackVelocity) continue;

          const target = npc.object.userData.wanderTarget;
          const dx = target.x - npc.object.position.x;
          const dz = target.z - npc.object.position.z;
          const distance = Math.hypot(dx, dz);

          if (distance < 1) {
            npc.object.userData.wanderTarget = randomPosition(15);
            continue;
          }

          const speed = 1.5;
          npc.object.position.x += (dx / distance) * speed * delta;
          npc.object.position.z += (dz / distance) * speed * delta;
          npc.object.rotation.y = Math.atan2(dx, dz);
        }
      }

      function updateCars(delta) {
        for (const car of cars) {
          car.position.x += car.userData.speed * delta;
          if (car.position.x > car.userData.endZ) {
            car.position.x = car.userData.startZ;
          }
        }
      }

      function applyCharacterBounce(character, direction, force = 5) {
        if (character.object.userData.ragdolled) return;
        const bounceDirection = direction.clone();
        bounceDirection.y = 0;
        if (bounceDirection.lengthSq() < 0.0001) bounceDirection.set(1, 0, 0);
        bounceDirection.normalize();

        const velocity =
          character.object.userData.knockbackVelocity || new THREE.Vector3();
        velocity.addScaledVector(bounceDirection, force).clampLength(0, 8);
        character.object.userData.knockbackVelocity = velocity;
      }

      function updateCharacterBounces(delta) {
        for (const character of characters.values()) {
          const velocity = character.object.userData.knockbackVelocity;
          if (!velocity) continue;
          character.object.position.x += velocity.x * delta;
          character.object.position.z += velocity.z * delta;
          velocity.multiplyScalar(Math.exp(-7 * delta));
          if (velocity.lengthSq() < 0.16) {
            delete character.object.userData.knockbackVelocity;
          }
        }
      }

      function syncStandingBodies() {
        for (const character of characters.values()) {
          if (character.object.userData.ragdolled) continue;
          const position = character.object.position;
          const rotation = character.object.quaternion;
          character.body.setTranslation(
            { x: position.x, y: position.y + 1, z: position.z },
            true,
          );
          character.body.setRotation(
            { x: rotation.x, y: rotation.y, z: rotation.z, w: rotation.w },
            true,
          );
          character.body.setLinvel({ x: 0, y: 0, z: 0 }, true);
          character.body.setAngvel({ x: 0, y: 0, z: 0 }, true);
        }
      }

      function knockCharacterDown(character, direction, force = 8) {
        if (character.object.userData.ragdolled) return;
        character.object.userData.ragdolled = true;
        character.object.userData.wander = false;

        const position = character.object.position;
        const rotation = character.object.quaternion;
        character.body.setTranslation(
          { x: position.x, y: position.y + 1, z: position.z },
          true,
        );
        character.body.setRotation(
          { x: rotation.x, y: rotation.y, z: rotation.z, w: rotation.w },
          true,
        );
        character.body.setLinearDamping(0.15);
        character.body.setAngularDamping(0.35);

        const impulseDirection = direction.clone();
        impulseDirection.y = 0;
        if (impulseDirection.lengthSq() < 0.0001) impulseDirection.set(0, 0, 1);
        impulseDirection.normalize();

        character.body.applyImpulse(
          {
            x: impulseDirection.x * force,
            y: Math.max(2.5, force * 0.35),
            z: impulseDirection.z * force,
          },
          true,
        );
        character.body.applyTorqueImpulse(
          {
            x: impulseDirection.z * force * 0.35,
            y: 0,
            z: -impulseDirection.x * force * 0.35,
          },
          true,
        );
      }

      function syncRagdolledCharacters() {
        const bodyOffset = new THREE.Vector3(0, -1, 0);
        const bodyRotation = new THREE.Quaternion();
        for (const character of characters.values()) {
          if (!character.object.userData.ragdolled) continue;
          const position = character.body.translation();
          const rotation = character.body.rotation();
          bodyRotation.set(rotation.x, rotation.y, rotation.z, rotation.w);
          bodyOffset.set(0, -1, 0).applyQuaternion(bodyRotation);
          character.object.position.set(
            position.x + bodyOffset.x,
            position.y + bodyOffset.y,
            position.z + bodyOffset.z,
          );
          character.object.quaternion.copy(bodyRotation);
        }
      }

      function checkCarCollisions() {
        for (const car of cars) {
          const hitRadius = (car.userData.hitRadius || 1.35) + 0.45;
          for (const character of characters.values()) {
            if (character.object.userData.ragdolled) continue;
            const dx = character.object.position.x - car.position.x;
            const dz = character.object.position.z - car.position.z;
            if (dx * dx + dz * dz > hitRadius * hitRadius) continue;

            const direction = new THREE.Vector3(dx, 0, dz);
            if (direction.lengthSq() < 0.0001)
              direction.set(0, 0, Math.sign(car.userData.speed) || 1);
            knockCharacterDown(
              character,
              direction,
              Math.max(8, (car.userData.speed || 5) * 1.6),
            );
          }
        }
      }

      function checkCharacterCollisions() {
        const list = [...characters.values()];
        for (let i = 0; i < list.length; i++) {
          for (let j = i + 1; j < list.length; j++) {
            const a = list[i],
              b = list[j];
            if (a.object.userData.ragdolled || b.object.userData.ragdolled)
              continue;
            const direction = new THREE.Vector3().subVectors(
              a.object.position,
              b.object.position,
            );
            const distanceSquared = direction.lengthSq();
            if (distanceSquared > 0.9 * 0.9) continue;
            const distance = Math.sqrt(distanceSquared);
            if (distance < 0.0001) direction.set(1, 0, 0);
            else direction.divideScalar(distance);

            const separation = Math.max(0, 0.9 - distance) * 0.5 + 0.01;
            a.object.position.addScaledVector(direction, separation);
            b.object.position.addScaledVector(direction, -separation);
            applyCharacterBounce(a, direction, 4.5);
            applyCharacterBounce(b, direction.clone().negate(), 4.5);
          }
        }
      }

      function animate() {
        requestAnimationFrame(animate);
        const delta = Math.min(clock.getDelta(), 0.05);

        updateCharacterBounces(delta);
        updateNPCs(delta);
        updateCars(delta);
        syncStandingBodies();
        world?.step();
        checkCharacterCollisions();
        checkCarCollisions();
        syncRagdolledCharacters();

        const forward = new THREE.Vector3();
        camera.getWorldDirection(forward);
        forward.y = 0;
        forward.normalize();
        const right = new THREE.Vector3()
          .crossVectors(forward, camera.up)
          .normalize();

        const movement = new THREE.Vector3();
        if (keys.w) movement.add(forward);
        if (keys.s) movement.sub(forward);
        if (keys.d) movement.add(right);
        if (keys.a) movement.sub(right);

        if (!cameraTarget && movement.lengthSq()) {
          movement.normalize().multiplyScalar(7 * delta);
          camera.position.add(movement);
        }

        if (!cameraTarget && keys.space) camera.position.y += 5 * delta;
        if (!cameraTarget && keys.shift) camera.position.y -= 5 * delta;

        if (cameraTarget) {
          const target = cameraTarget.object.position;
          const desiredPosition = target.clone().add(cameraFollowOffset);
          const lookAtPosition = target.clone().add(cameraLookOffset);
          camera.position.lerp(desiredPosition, 1 - Math.exp(-3.5 * delta));
          cameraTargetQuaternion.setFromRotationMatrix(
            cameraLookMatrix.lookAt(camera.position, lookAtPosition, camera.up),
          );
          camera.quaternion.slerp(
            cameraTargetQuaternion,
            1 - Math.exp(-5 * delta),
          );
        }

        renderer.render(scene, camera);
      }

      $("aiMode").onclick = () => {
        $("aiSection").style.display = "block";
        $("jsonSection").style.display = "none";
        activeMode = "ai";
      };

      $("jsonMode").onclick = () => {
        $("aiSection").style.display = "none";
        $("jsonSection").style.display = "block";
        activeMode = "json";
      };

      $("generateAI").onclick = generateAI;
      $("playJSON").onclick = playJSON;

      $("loadMap").onclick = async () => {
        try {
          await loadMap($("mapURL").value.trim());
          status("Map loaded.");
        } catch (error) {
          status(error.message);
        }
      };

      $("togglePanel").onclick = () => $("panel").classList.toggle("hidden");
      $("hidePanel").onclick = () => $("panel").classList.add("hidden");

      $("resetScene").onclick = () => {
        cameraTarget = null;
        $("subtitle").style.display = "none";
        $("subtitle").textContent = "";
        for (const character of characters.values()) {
          scene.remove(character.object);
          world.removeRigidBody(character.body);
        }
        characters.clear();
        npcs = [];
        for (const car of cars) scene.remove(car);
        cars = [];
        if (mapObject) scene.remove(mapObject);
        mapObject = null;
        status("Scene reset.");
      };

      function addChat(text) {
        const log = $("chatLog");
        log.textContent += "\n" + text;
        log.scrollTop = log.scrollHeight;
      }

      async function sendChat() {
        const message = $("chatInput").value.trim();
        const name = $("chatCharacter").value.trim();
        if (!message) return;

        $("chatInput").value = "";
        addChat("You: " + message);

        try {
          const reply = await characterReply(name, message);
          addChat(name + ": " + reply);
        } catch (error) {
          addChat("Error: " + error.message);
        }
      }

      $("sendChat").onclick = sendChat;
      $("chatInput").addEventListener("keydown", (e) => {
        if (e.key === "Enter") sendChat();
      });

      init().catch((error) => {
        console.error(error);
        status("Initialization error: " + error.message);
      });
    