#include<stdio.h>
#include<stdlib.h>
#include<sys/types.h>
/** opendir, DIR */
#include<dirent.h>
/** errno */
#include <errno.h>
/** strlen */
#include <string.h>

#define MAX_LEN_DIR_NAME 16

int main(int count, char** args) {
    /* printf("You passed [%d] argument.\n", count-1);
    for (int i = 1; i < count; i += 1) {
        printf("Argument #%d: %s\n", i, args[i]);
    }
    */
    char * dir_name = ".";
    if(count > 1 && strlen(args[1]) <= MAX_LEN_DIR_NAME && strlen(args[1]) > 0) {
        dir_name = args[1];
    }

    /*
    DIR *dir = opendir(dir_name);
    if(dir == NULL) {
        printf("ERROR: couldn't open directory\n");
        switch(errno) {
            case EACCES:
                printf("EACCES\n");
                break;
            case ENOENT:{
                            printf("ENOENT\n");
                            if(strlen(dir_name) > 0) {
                                printf("EDIDE: Error Directory Doesn't EXIST\n");
                            }
                            break;
                        }
            case ENOTDIR:
                        printf("ENOTDIR\n"); break;
            default:
                        printf("Some error\n");
        }
        exit(1);
    }
*/
    // here we have opened directory
    // printf("Yay! We found and opened a directory\n");
    /*
     *  struct dirent *de = readdir(dir);
        printf("%s, %d\n", de->d_name, de->d_type);
    */

    struct dirent **namelist;
    int n = scandir(dir_name, &namelist, NULL, alphasort);
    // printf("Return from scandir: %d\n", n);
    if(n == -1){
        char *message = (char *)malloc((sizeof(char)) * 100);
        sprintf(message, "ERROR: Cannot scan directory %s.", dir_name);
        perror(message);
    }
    int i = 0;
    while(i < n) {
        printf("%s\n", namelist[i]->d_name);
        free(namelist[i]);
        i += 1;
    }
    free(namelist);

    // exit successfully
    return 0;
}

