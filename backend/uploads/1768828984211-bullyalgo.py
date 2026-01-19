class Process:
    def __init__(self, pid):
        self.pid = pid
        self.alive = True
        self.leader = None

def bully_election(processes, starter_pid):
    print(f"\n{'='*50}")
    print(f"ELECTION STARTED BY PROCESS {starter_pid}")
    print(f"{'='*50}")
    
    starter = None
    for p in processes:
        if p.pid == starter_pid and p.alive:
            starter = p
            break
    
    if not starter:
        print("Error: Starter process not alive!")
        return
    
    higher = [p for p in processes if p.pid > starter_pid and p.alive]
    
    print(f"\nProcess {starter_pid} looks for higher ID processes...")
    
    if not higher:
        print(f"✓ No higher processes found")
        print(f"✓ Process {starter_pid} BECOMES LEADER")
        
        for p in processes:
            if p.alive:
                p.leader = starter_pid
        
        print(f"\nProcess {starter_pid} announces: I am the leader!")
        return starter_pid
    
    else:
        print(f"✗ Found higher processes: {[p.pid for p in higher]}")
        print(f"✓ They respond: 'Stop! We'll take over'")
        print(f"\nProcess {starter_pid} stops and waits...")
        
        highest = max(higher, key=lambda p: p.pid)
        print(f"\n→ Process {highest.pid} (highest) starts new election")
        
        print(f"✓ Process {highest.pid} BECOMES LEADER")
        
        for p in processes:
            if p.alive:
                p.leader = highest.pid
        
        print(f"\nProcess {highest.pid} announces: I am the leader!")
        return highest.pid


def show_status(processes):
    """Show status of all processes"""
    print("\nCURRENT STATUS:")
    print("-" * 50)
    for p in processes:
        status = "ALIVE" if p.alive else "DEAD"
        leader_info = f" | Leader: {p.leader}" if p.leader else ""
        print(f"Process {p.pid}: {status}{leader_info}")
    print("-" * 50)



print("\n" + "="*50)
print("BULLY ELECTION ALGORITHM")
print("="*50)


print("\n\nEXAMPLE 1: Process 2 starts election")
print("="*50)
processes = [Process(1), Process(2), Process(3), Process(4), Process(5)]
show_status(processes)
bully_election(processes, starter_pid=2)
show_status(processes)



print("\n\nEXAMPLE 2: Highest process is dead")
print("="*50)
processes = [Process(1), Process(2), Process(3), Process(4), Process(5)]
processes[4].alive = False  # Process 5 is dead
show_status(processes)
bully_election(processes, starter_pid=2)
show_status(processes)


print("\n\nEXAMPLE 3: Multiple high processes dead")
print("="*50)
processes = [Process(1), Process(2), Process(3), Process(4), Process(5)]
processes[3].alive = False  # Process 4 is dead
processes[4].alive = False  # Process 5 is dead
show_status(processes)
bully_election(processes, starter_pid=1)
show_status(processes)



print("\n\nEXAMPLE 4: Lowest process starts (all alive)")
print("="*50)
processes = [Process(10), Process(20), Process(30)]
show_status(processes)
bully_election(processes, starter_pid=10)
show_status(processes)